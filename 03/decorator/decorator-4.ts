const log = (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
  return {
      value: function( ... args: any[]) {
          console.log("Arguments: ", args.join(", "));
          const result = descriptor.value.apply(target, args);
          console.log("Result: ", result);
          return result;
      }
  }
}

class Calculator {
  @log
  add(x: number, y: number) {
      return x + y;
  }
}

new Calculator().add(1, 3);
//Arguments: 1, 3
//Result: 4