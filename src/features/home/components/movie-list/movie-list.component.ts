import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MovieRes } from 'features/home/model/movie.model';
import Swiper, { Autoplay, SwiperOptions } from 'swiper';

Swiper.use([Autoplay]);

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieListComponent implements OnInit, OnChanges {
  @Input() data: MovieRes[] = [];
  @Input() category: string;
  config: SwiperOptions = {
    modules: [Autoplay],
    autoplay: {
      delay: 30000
    },
    speed: 3000,
    slidesPerView: 'auto',
    spaceBetween: 10,
    grabCursor: true
  }

  constructor() { }

  ngOnChanges(simple: SimpleChanges) {

  }

  ngOnInit(): void {
  }
}
