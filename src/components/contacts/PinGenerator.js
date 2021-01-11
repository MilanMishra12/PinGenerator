"use strict";
exports.__esModule = true;
exports.PinGenerator = void 0;
var PinGenerator = /** @class */ (function () {
  function PinGenerator() {
    this.characters = "";
  }
  PinGenerator.prototype.setLength = function (length) {
    this.length = length;
    return this;
  };
  PinGenerator.prototype.setNumberCase = function (isNumeric) {
    if (isNumeric) {
      this.characters += "123456789";
    }
    return this;
  };
  PinGenerator.prototype.generate = function () {
    var characterList = this.characters;
    var pin1 = "";
    var pin2 = "";
    var pin3 = "";
    var pin4 = "";
    var pin5 = "";
    var pin = "";

    for (var i = 0; i < this.length; ++i) {
      pin1 = pin1 + characterList[getRandomInt(0, characterList.length - 1)];
      pin2 = pin2 + characterList[getRandomInt(1, characterList.length - 1)];
      pin3 = pin3 + characterList[getRandomInt(2, characterList.length - 1)];
      pin4 = pin4 + characterList[getRandomInt(3, characterList.length - 1)];
      pin5 = pin5 + characterList[getRandomInt(4, characterList.length - 1)];
    }

    return (pin = pin1 + " " + pin2 + " " + pin3 + " " + pin4 + " " + pin5);
  };
  return PinGenerator;
})();
exports.PinGenerator = PinGenerator;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
