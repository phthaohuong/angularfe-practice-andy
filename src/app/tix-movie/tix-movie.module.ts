import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SliderComponent } from "./slider/slider.component";
import { ShowtimesComponent } from "./showtimes/showtimes.component";
import { NewsComponent } from "./news/news.component";
import { UpcomingComponent } from "./upcoming/upcoming.component";
import { NowShowingComponent } from "./now-showing/now-showing.component";
import { MovieItemComponent } from "./movie-item/movie-item.component";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { ReviewComponent } from './review/review.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ArticlesComponent } from './articles/articles.component';
import { NewsItemComponent } from './news-item/news-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    ShowtimesComponent,
    NewsComponent,
    UpcomingComponent,
    NowShowingComponent,
    MovieItemComponent,
    ReviewComponent,
    PromotionComponent,
    ArticlesComponent,
    NewsItemComponent,
  ],
  imports: [CommonModule, SlickCarouselModule],
  exports: [HomeComponent],
})
export class TixMovieModule {}
