import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForModule } from '@rx-angular/template/for';
import { TiltModule } from '../tilt/tilt.module';
import { StarRatingModule } from '../ui/pattern/star-rating/star-rating.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieImagePipe } from './movie-image.pipe';
import { MovieListComponent } from './movie-list/movie-list.component';
import {DirtyCheckModule} from "../shared/dirty-checks/dirty-check.module";

@NgModule({
  declarations: [MovieImagePipe, MovieCardComponent, MovieListComponent],
    imports: [CommonModule, TiltModule, StarRatingModule, ForModule, DirtyCheckModule],
  exports: [MovieListComponent, MovieImagePipe],
})
export class MovieModule {}
