import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Movie} from '../../models/movie.model';
import {NgForm} from '@angular/forms';
import {AddNewMovieDialogComponent} from './dialog/add-new-movie-dialog.component';

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


  constructor(private moviesService: MoviesService,
              private liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog) {
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
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
        console.log('The dialog was closed ' + JSON.stringify(result).toString());
      }
    });

  }

}


