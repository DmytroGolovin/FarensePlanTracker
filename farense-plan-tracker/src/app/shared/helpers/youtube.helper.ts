export default class YoutubeHelper {
  public static getVideoId(videoUrl: string | undefined) {
    if(!videoUrl) {
      return undefined;
    }

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = videoUrl.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : undefined;
  }

  public static getVideoEmbedUrl(videoUrl: string | undefined){
    if(!videoUrl) {
      return null;
    }

    const videoId = this.getVideoId(videoUrl);
    if(!videoId) {
      return null;
    }

    return "https://www.youtube.com/embed/" + videoId;
  }
}
