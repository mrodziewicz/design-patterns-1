class Tree {
  // constructor

  // ! duzo kodu, logiki, pamieci
}

class Bush {
  // constructor

  // ! duzo kodu, logiki, pamieci
}

class Rock {
  // constructor

  // ! duzo kodu, logiki, pamieci
}


const gameObjects = [
  { type: 'tree', position: [ 23, 33, 114 ] }, 
  { type: 'tree', position: [ 23, 11, 444 ] }, 
  { type: 'tree', position: [ 23, 25, 123 ] }, 
  { type: 'bush', position: [ 23, 11, 444 ] }, 
  { type: 'bush', position: [ 23, 25, 63 ] }, 
  { type: 'rock', position: [ 23, 221, 133 ] }, 
  { type: 'rock', position: [ 541, 25, 33 ] }, 
  { type: 'tree', position: [ 23, 2, 665 ] }, 
  { type: 'tree', position: [ 23, 25, 123 ] },
]

gameObjects.forEach(obj => {
  switch( obj.type ) {
    case 'tree':
      new Tree(obj.position); break;
    case 'bush':
      new Tree(obj.position); break;
    case 'rock':
      new Tree(obj.position); break;

    default:
      break;
  }
});


// zadanie - zamiast tworzenia obiektów bezpośrenio, uzyjmy wzorca Flyweight, aby współdzielić te same obiekty