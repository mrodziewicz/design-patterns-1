let protoRabbit = {
  color: 'grey',
  speak(line) {
      console.log(`The ${this.type} rabbit says ${line}`);
  }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "assassin";
killerRabbit.speak("SKREEEE!");