import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SvgIconModule } from '../../ui/component/icons/icon.module';
import { MovieSearchControlModule } from '../movie-search-control/movie-search-control.module';
import { MyMovieListComponent } from './my-movie-list.component';
import {DirtyCheckModule} from "../../shared/dirty-checks/dirty-check.module";

const routes: Routes = [
  {
    path: '',
    component: MyMovieListComponent,
  },
];

@NgModule({
  declarations: [MyMovieListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SvgIconModule,
    MovieSearchControlModule,
    DirtyCheckModule,
  ],
})
export class MyMovieListModule {}
