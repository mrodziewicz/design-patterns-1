// our Hello World decorator
const helloWorld = f => (...args) => {
  console.log('Hello World')
  return f(...args)
}

// function to be decorate
const add = (a, b) => a + b

// decorate the function
const helloWorldAdd = helloWorld(add)

// run it
helloWorldAdd(3, 4)
//=> "Hello World"
//=> 7