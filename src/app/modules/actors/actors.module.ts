import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActorsListComponent} from './actors-list/actors-list.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: ActorsListComponent}
];

@NgModule({
  declarations: [ActorsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ActorsModule {
}
