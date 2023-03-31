import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {Movie} from '../../models/movie.model';
import {AddNewMovieDialogComponent} from './dialog/add-new-movie-dialog.component';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../../core/stores/app.reducer';
import {MoviesActions} from '../../services/stores/movies-store/movies.actions';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['title', 'description', 'rating', 'director', 'year'];
  dataSource = new MatTableDataSource([]);
  movies: Observable<{ movies: Movie [] }>;


  constructor(private moviesService: MoviesService,
              private liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog,
              private store: Store<AppState>
  ) {
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.movies = this.store.select('movies');

    this.store.dispatch( MoviesActions.addMovieStart());

    this.dataSource = new MatTableDataSource(this.moviesService.getMovies());
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  showAddMovieDialog() {
    const dialogRef = this.dialog.open(AddNewMovieDialogComponent, {height: '500px', width: '300px'});

    dialogRef.afterClosed().subscribe(result => {
      if (result !== '' && result) {
        this.moviesService.addMovie(result);
        this.dataSource = new MatTableDataSource(this.moviesService.getMovies());
        this.store.dispatch(MoviesActions.addMovie({movie: result}));
        console.log('The dialog was closed ' + JSON.stringify(result).toString());
      }
    });
  }

  deleteMovie(index: number) {
    this.store.dispatch(MoviesActions.deleteMovie({movieIndex: index}));
  }

}


