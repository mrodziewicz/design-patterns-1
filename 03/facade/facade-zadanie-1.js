function FlightBooker() {
  function book(bookingInfo) {
      // handle booking flight
      console.log(bookingInfo.flight);
  }

  // revealing module pattern
  return {
      book: book
  }
}

function TrainBooker() {
  function book(bookingInfo) {
      // handle train booking
      console.log(bookingInfo.train);
  }

  // revealing module pattern
  return {
      book: book
  }
}

function HotelBooker() {
  function book(bookingInfo) {
      // handle hotel booking
      console.log(bookingInfo.hotel);
  }

  // revealing module pattern
  return {
      book: book
  }
}

const ReservationTypes = {
  flight: 'flight',
  hotel: 'hotel',
  train: 'train',
  flightAndHotel: 'flightAndHotel',
  trainAndHotel: 'trainAndHotel'
}

function TravelFacade(reservationType) {
  this.reservationType = reservationType;

  // TODO
}

TravelFacade.prototype.book = function (reservationInfo) {
  switch (this.reservationType) {
      
      // TODO
      // this.flight.book(reservationInfo)

      default:
          // throw an error
          throw Error('Reservation type is not supported.');
  }
}


// ------- 

let flight = {
  'departure_datetime': '21/09/2017 09:00',
  'return_datetime': '25/09/2017 22:00',
  'from': 'New York',
  'to': 'London'
};

let train = {
  'departure_datetime': '22/09/2017 20:00',
  'return_datetime': '25/09/2017 10:00',
  'from': 'London',
  'to': 'Edinburgh'
};

let hotel = {
  'check_in_date': '22/09/2017',
  'nights': 1,
  'city': 'London',
  'hotel_name': 'Four Seasons Hotel'
};

// rezerwacja lotu i hotelu bez fasady
const flight1 = new FlightBooker().book({ flight });
const hotel1 = new HotelBooker().book({ hotel });

/*
// zadanie - uzupełnić TravelFacade, aby metoda book wywoływała odpowiednie metody w zaleności od typu

let travel1 = new TravelFacade('Flight_And_Hotel');
travel1.book({flight, hotel});
// {departure_datetime: "21/09/2017 09:00", return_datetime: "25/09/2017 22:00", from: "New York", to: "London"}
// {check_in_date: "22/09/2017", nights: 1, city: "London", hotel_name: "Four Seasons Hotel"}

let travel2 = new TravelFacade('Train_And_Hotel');
travel2.book({train, hotel});
// {departure_datetime: "22/09/2017 20:00", return_datetime: "25/09/2017 10:00", from: "London", to: "Edinburgh"}
// {check_in_date: "22/09/2017", nights: 1, city: "London", hotel_name: "Four Seasons Hotel"}
*/