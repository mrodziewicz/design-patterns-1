const log = (target: Object, key: string | symbol) => {
  let value = target[key];

  const getter = () =>  {
      console.log("Getting value: ", value);
      return value;
  };
  const setter = (val) => {
      console.log("Setting value: ", val);
      value = val;
  }
  Reflect.deleteProperty[key];
  Reflect.defineProperty(target, key, {
      get: getter,
      set: setter
  });
}

class Box<T> {
  @log
  item: T;
}

const numberInABox = new Box<number>();
numberInABox.item = 12;
numberInABox.item;

//Setting value: 12
//Getting value: 12