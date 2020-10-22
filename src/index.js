const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprArr = expr.split('');

    let codedArr = [];
    let morseArr = [];
    let resultString = '';

    for (let i = 0; i < expr.length / 10; i++) {
        let tenDigitStr = exprArr.splice(0, 10).join('');
        codedArr.push(tenDigitStr);
    }

    for (let item of codedArr) {
        let morseString = '';

        if (item === '********') {
            morseArr.push(' ');
        }

        let itemCopy = item;
        for (let i = item.length; i > 0; i = i-2) {
            if(itemCopy.startsWith('11')) {
                morseString += '-';
                itemCopy = itemCopy.split('').slice(2).join('');
            } else if(itemCopy.startsWith('10')) {
                morseString += '.';
                itemCopy = itemCopy.split('').slice(2).join('');
            } else {
                itemCopy = itemCopy.split('').slice(2).join('');
                console.log(itemCopy);
            }
        }
        morseArr.push(morseString);
    }

    for (let item of morseArr) {
        if (item === "") {
            resultString += " ";
        } else {
            resultString += MORSE_TABLE[item];
        }
        
    }
   return resultString;
}

module.exports = {
    decode
}