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

  // zadanie - zamienić poniższy kod na użycie slidesFactory (1 linijka!)
  if( slide.type === 'image' ) {
    slideContent = (new ImageSlide(slide.url)).display();
  } else if( slide.type === 'video' ) {
    slideContent = (new VideoSlide(slide.url, 'mp4')).display();
  }

  console.log(slideContent);
} );
