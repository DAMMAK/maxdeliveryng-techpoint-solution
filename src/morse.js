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

  const codeArr = morseCode.split(" "); //convert the string into an array
  // console.log("[COde Array]=>", codeArr);
  codeArr.forEach((element, index) => {
    var morse = codeArr[index]; //Get Each Item from the arry using the index

    if (morse === "" && codeArr[index + 1] === "") {
      transformText.push(" ");
      transformText.push(MORSE_CODE[morse]);
    } else {
      transformText.push(MORSE_CODE[morse]); //use the item as an object key to get the value form the object of MORSE_CODE
    }
  });

  //console.log("[Morse Character]:", transformText.join(""));
  return transformText.join(""); //Join The Array to make a single string
}

module.exports = decodeMorse;
