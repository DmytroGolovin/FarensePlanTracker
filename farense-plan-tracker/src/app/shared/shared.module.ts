import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserBarComponent } from './components/user-bar/user-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { VideoRendererComponent } from './components/video-renderer/video-renderer.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    FooterComponent,
    UserBarComponent,
    SpinnerComponent,
    LineChartComponent,
    FloatingButtonComponent,
    VideoRendererComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    YouTubePlayerModule
  ],
  exports: [
    NavBarComponent,
    CardComponent,
    FooterComponent,
    UserBarComponent,
    SpinnerComponent,
    LineChartComponent,
    FloatingButtonComponent,
    VideoRendererComponent
  ]
})
export class SharedModule { }
