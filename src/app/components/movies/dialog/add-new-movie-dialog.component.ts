import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Movie} from '../../../models/movie.model';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-movie-dialog',
  templateUrl: './add-new-movie-dialog.html',
})
export class AddNewMovieDialogComponent implements AfterViewInit {
  @ViewChild('formAddNewMovie') newForm: NgForm;
  listOfYear = [];
  newMovie: Movie = new Movie();


  constructor(
    public dialogRef: MatDialogRef<AddNewMovieDialogComponent>) {

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i > 1900; i--) {
      this.listOfYear.push(i);
    }
    this.newMovie.title = '';
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      return;
    }
    this.dialogRef.close(form.value);
    this.newForm.resetForm();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.newForm.form.patchValue({
        seen: 'false',
        year: '2022',
        rating: '5'
      });
    }, 200);
  }

}

