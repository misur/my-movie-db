import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActorsListComponent} from './actors-list/actors-list.component';
import {RouterModule, Routes} from '@angular/router';
import { AddActorComponent } from './add-actor/add-actor.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';


const routes: Routes = [
  {path: '', component: ActorsListComponent}
];

@NgModule({
  declarations: [ActorsListComponent, AddActorComponent, EditActorComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatProgressBarModule
    ]
})
export class ActorsModule {
}
