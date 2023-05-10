import { Component, Input } from '@angular/core';
import YoutubeHelper from '../../helpers/youtube.helper';

@Component({
  selector: 'app-video-renderer',
  templateUrl: './video-renderer.component.html',
  styleUrls: ['./video-renderer.component.scss']
})
export class VideoRendererComponent {
  @Input() public videoUrl: string | undefined;
  public apiLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  public getVideoId(){
    return YoutubeHelper.getVideoId(this.videoUrl);
  }
}
