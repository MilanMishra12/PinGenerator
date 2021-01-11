export class PinGenerator {
  characters: string;
  length: any;
  constructor() {
    this.characters = "";
  }
  setLength(length: string) {
    this.length = length;
    return this;
  }
  setNumberCase(isNumeric: number) {
    if (isNumeric) {
      this.characters += "0123456789";
    }
    return this;
  }
  generate() {
    let characterList = this.characters;
    var pin1: string = "";
    var pin2: string = "";
    var pin3: string = "";
    var pin4: string = "";
    var pin5: string = "";
    var pin: string = "";

    for (let i = 0; i < this.length; ++i) {
      pin1 = pin1 + characterList[getRandomInt(0, characterList.length - 1)];
      pin2 = pin2 + characterList[getRandomInt(1, characterList.length - 1)];
      pin3 = pin3 + characterList[getRandomInt(2, characterList.length - 1)];
      pin4 = pin4 + characterList[getRandomInt(3, characterList.length - 1)];
      pin5 = pin5 + characterList[getRandomInt(4, characterList.length - 1)];
    }
    pin = pin1 + " " + pin2 + " " + pin3 + " " + pin4 + " " + pin5;
    return pin;
  }
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
