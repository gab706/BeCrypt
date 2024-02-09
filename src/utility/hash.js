'use strict';

module.exports = {
    rightRotate: (value, amount) => {
        return (value >>> amount) | (value << (32 - amount));
    },
    leftRotate: (value, amount) => {
        return (value << amount) | (value >>> (32 - amount));
    },
    toHex: (input) => {
        let hex = '';
        for (let i = 0; i < 8; i++)
            hex += ((input >>> (24 - i * 4)) & 0xF).toString(16);
        return hex;
    },
    toHexLittleEndian: (input) => {
        const hex = input.toString();
        return '0'.repeat(Math.max(0, 8 - hex.length)) + hex;
    },
    stringToBinary: (input) => {
        let binary = '';
        for (let i = 0; i < input.length; i++) {
            const charCode = input.charCodeAt(i).toString(2);
            binary += '0'.repeat(8 - charCode.length) + charCode;
        }
        return binary;
    },
    stringToWords: (input) => {
        const words = [];
        for (let i = 0; i < input.length; i += 4) {
            words.push(
                (input.charCodeAt(i) & 0xff) |
                ((input.charCodeAt(i + 1) & 0xff) << 8) |
                ((input.charCodeAt(i + 2) & 0xff) << 16) |
                ((input.charCodeAt(i + 3) & 0xff) << 24)
            );
        }
        return words;
    },
    toBinary: (input) => {
        return input.toString().padStart(64, '0');
    }
}