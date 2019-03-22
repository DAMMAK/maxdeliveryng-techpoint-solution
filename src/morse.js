const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS"
};

Object.freeze(MORSE_CODE);

/**
 * This is the entry point to the program.
 *
 * @param {string} morseCode The string to decode.
 */
function decodeMorse(morseCode) {
  let transformText = Array();
  //code = code.replace(/ {1,}/g, " ");
  let codeArr = rmSpaces(morseCode);
  // const codeArr = mCode.split(" "); //convert the string into an array
  // console.log("[COde Array]=>", codeArr);
  for (let index = 0; index < codeArr.length; index++) {
    var morse = codeArr[index]; //Get Each Item from the arry using the index

    if (morse === "" && codeArr[index + 1] === "") {
      transformText.push(" ");
      transformText.push(MORSE_CODE[morse]);
    } else {
      transformText.push(MORSE_CODE[morse]); //use the item as an object key to get the value form the object of MORSE_CODE
    }
  }

  //console.log("[Morse Character]:", transformText.join(""));
  return transformText.join(""); //Join The Array to make a single string
}

var rmSpaces = codeArr => {
  let rData = codeArr.split(" ");
  let keys = Object.keys(MORSE_CODE);
  for (let index = 0; index < codeArr.length; index++) {
    let cur = rData[0];
    if (!keys.includes(cur)) {
      rData.splice(0, 1);
    } else {
      break;
    }
  }

  for (let index = rData.length; index > 0; index--) {
    let curIndex = rData.length - 1;
    let cur = rData[curIndex];
    if (!keys.includes(cur)) {
      rData.splice(rData.length - 1, 1);
    } else {
      break;
    }
  }
  return rData;
};

module.exports = decodeMorse;
