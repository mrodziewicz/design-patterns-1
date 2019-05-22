// zadanie - napisz dekorator, który zwróci obiekt { error, value } - z użyciem try-catch
// const tryCatch = ...

const double = x => {
  if (!isNumeric(x)) {
    throw new TypeError('value must be numeric')
  }

  return x * 2
}

double(4);
double('some string');    // ouch!

/*
// zadanie - poniższy kod powinien działać i wypisywać obiekt z błędem i wartością

// new "safe" double function
const safeDouble = tryCatch(double);

safeDouble('abc')
//=> { error: [TypeError: value must be numeric], value: null }

safeDouble(4)
//=> { error: null, value: 8 }
*/