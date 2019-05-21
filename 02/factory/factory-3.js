class Book {
  constructor(name, category, author){
    this.name = name
    this.category = category
    this.author = author
  }
}

class Author {
  constructor(name){
    this.name = name
  }
}

/*
const author = new Author('Jordan')
const book = new Book('Design patterns', 'Programming', author)

// ^ niezbyt wygodne
*/

const bookFactory = {
  create(bookName, category, authorName) {
    const author = new Author(authorName)
    const book = new Book(bookName, category, author)
    
    return book
  }
}

bookFactory.create('Design patterns', 'Programming', 'Jordan')