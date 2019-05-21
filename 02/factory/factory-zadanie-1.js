class ImageSlide {
  constructor(url){
    this.url = url;
  }

  display() {
    return `<img src="${this.url}" />`;
  }
}

class VideoSlide {
  constructor(url, videoType){
    this.url = url;
    this.videoType = videoType;
  }

  display() {
    return `
    <video width="320" height="240" controls>
      <source src="${this.url}" type="${this.videoType}">
    </video>
    `;
  }
}


// zadanie - wypełnić
const SlidesFactory = {
  create(type, url) {
    switch( type ) {
      case 'image':
        return new ImageSlide(url);
      case 'video':
        return new VideoSlide(url, 'mp4');
    }
  }
}


// ----
const slides = [
  { type: 'image', url: 'image1.jpg' },
  { type: 'image', url: 'image2.jpg' },
  { type: 'video', url: 'video1.mp4' },
]

slides.forEach( slide => {
  let slideContent;
  
  slideContent = SlidesFactory.create( slide.type, slide.url );
  // zadanie - zamienić poniższy kod na użycie slidesFactory (1 linijka!)

  console.log(slideContent.display());
} );
