class WidthChecker {

  constructor() {
    this.id = Math.random();
  }
  getWidth() {
    // zadanie 2 - sprawdzenie tej wartosci powinno odbywac sie tylko raz w calej aplikacji
    return window.innerWidth;
  }
  getId() {
    return this.id;
  }
}


const checker1 = new WidthChecker();
console.log( 'window width is: ', checker1.getWidth() );

const checker2 = new WidthChecker();
console.log( 'window width is: ', checker2.getWidth() );

// zadanie 1 - bez zmian w powyższych linijkach, powinno zostać wypisane 'true'
console.log( checker1.getId() === checker2.getId() );