import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieModel} from '../movie-model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: MovieModel;

  @Input() index!: number;

  @Output() selected = new EventEmitter<MovieModel>();

  ngOnInit() {
    if (!this.movie) {
      throw new Error(
        `MovieCardComponent expects movie to be set, ${this.movie} given`
      );
    }
  }

  movieClicked() {
    this.selected.emit(this.movie);
  }

  divs = new Array(100).fill(null).map((v, i) => i);
}
