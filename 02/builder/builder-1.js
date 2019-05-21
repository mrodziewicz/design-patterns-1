// normal class
class Person {

  constructor( id, name, age, address, phoneNr ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.phoneNr = phoneNr;
  }
}

// builder 
class PersonBuilder {
  constructor() {
    this.id = undefined;
    this.name = undefined;
    this.age = undefined;
    this.address = undefined;
    this.phoneNr = undefined;
  }

  getPerson() {
    return new Person(
      this.id, this.name, this.age, this.address, this.phoneNr
    );
  }

  setId( id ) {
    this.id = id;
    return this;
  }
  setName( name ) {
    this.name = name;
    return this;
  }
  setAge( age ) {
    this.age = age;
    return this;
  }
  setAddress( address ) {
    this.address = address;
    return this;
  }
  setPhoneNr( phoneNr ) {
    this.phoneNr = phoneNr;
    return this;
  }
}

/*
const barbie = new Person( 1, "Barbie", 18, undefined, "888888888" );
const ken = new PersonBuilder()
            .setId( 2 )
            .setName( "Ken" )
            .setAge( "22" )
            .setPhoneNr( "123789123" )
            .getPerson();
*/