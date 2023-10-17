const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let binaryArrays = divideBinaryStrintToBinaryArrays(expr);
  let morseArrays = convertMorseToBinaryArray(binaryArrays);
  let textString = concatenateResultString(morseArrays);

  return textString;
}

function divideBinaryStrintToBinaryArrays(expr) {
  let binaryArrays = [];

  for (let i = 0; i < expr.length; i += 10) {
    binaryArrays.push(expr.slice(i, i + 10));
  }

  return binaryArrays;
}

function convertMorseToBinaryArray(binaryArrays) {
  let morseArrays = binaryArrays.map(function (elem) {
    let resultMorseString = "";

    for (let i = 0; i < elem.length; i += 2) {
      if (elem[i] + elem[i + 1] === "10") {
        resultMorseString += ".";
      } else if (elem[i] + elem[i + 1] === "11") {
        resultMorseString += "-";
      }
    }

    if (elem === "**********") {
      resultMorseString += " ";
    }

    elem = resultMorseString;
    return elem;
  });

  return morseArrays;
}

function concatenateResultString(morseArrays) {
  let resultString = '';
  
  morseArrays.map(function(elem) {
    for (const key in MORSE_TABLE) {
      if (MORSE_TABLE.hasOwnProperty(key) && key == elem) {
        resultString += MORSE_TABLE[key];
      }
    }

    if (elem === " ") {
      resultString += " ";
    }
  })

  return resultString;
}

module.exports = {
  decode,
};
