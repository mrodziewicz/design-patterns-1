let protoRabbit = {
  color: 'grey',
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "assassin";

// zadanie - przepisz powzszy kod, aby uzylal skladni bez Object.create 
// (zamiast tego: .prototype)

killerRabbit.speak("SKREEEE!");