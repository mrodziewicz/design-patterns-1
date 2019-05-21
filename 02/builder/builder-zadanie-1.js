// normal class
class BoxElement {

  constructor( size, backgroundColor, fontColor, content, borderRadius ) {
    this.size = size;
    this.backgroundColor = backgroundColor;
    this.fontColor = fontColor;
    this.content = content;
    this.borderRadius = borderRadius;
  }
}


// zadanie - utworzyć klasę na podstawie BoxElement
class BoxElementBuilder {

}

const box1 = new BoxElement( "S", "red", "white", "I am the red box", "5px" );
const box2 = new BoxElement( "S", undefined, undefined, "Who am I", undefined );

/*
const box3 = new BoxElementBuilder()
            .setContent("Whoa!");
*/