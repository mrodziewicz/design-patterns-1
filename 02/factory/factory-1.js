function Factory() {
  this.createEmployee = function (type) {
      var employee;

      if (type === "fulltime") {
          employee = new FullTime();
      } else if (type === "parttime") {
          employee = new PartTime();
      } else if (type === "temporary") {
          employee = new Temporary();
      } else if (type === "contractor") {
          employee = new Contractor();
      }

      employee.type = type;

      employee.say = function () {
          return this.type + ": rate " + this.hourly + "/hour";
      }

      return employee;
  }
}

var FullTime = function () {
  this.hourly = "$12";
};

var PartTime = function () {
  this.hourly = "$11";
};

var Temporary = function () {
  this.hourly = "$10";
};

var Contractor = function () {
  this.hourly = "$15";
};


/*
  var factory = new Factory();

  console.log(factory.createEmployee("fulltime"));
  console.log(factory.createEmployee("parttime"));
  console.log(factory.createEmployee("temporary"));
  console.log(factory.createEmployee("contractor"));
*/
