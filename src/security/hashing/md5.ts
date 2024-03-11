'use strict';
import crypto from 'crypto';
import Hash from '../../utility/hash.js';

import seedSalt from '../salting/seedSalt.js';
import charSalt from '../salting/charSalt.js';
import sinSalt from '../salting/sinSalt.js';

/**
 * Hashes the input using the MD5 algorithm with optional salting.
 *
 * This function takes an input string and, optionally, a type of salt.
 * It then hashes the input using the MD5 algorithm with the specified salt type, or no salt if null is provided.
 *
 * @param {string} input - The input string to be hashed.
 * @param {('seed' | 'sin' | 'char' | null | undefined | string)} [salt] - The type of salt to be used.
 * @returns {string} - The hashed result with optional salt.
 * @throws {Error} - If the salt type is not recognized. Only 'seed', 'sin', 'char' are allowed as salt types.
 */
export default (input: string, salt?: string | null): string => {
    if (salt === null || salt === undefined)
        salt = null;
    else {
        switch (salt.toLowerCase()) {
            case 'seed':
                salt = seedSalt();
                break;
            case 'sin':
                salt = sinSalt();
                break;
            case 'char':
                salt = charSalt();
                break;
            default:
                throw new Error('Salt type not recognised. Use: Char, Sin or Seed');
        }
    }

    const words: number[] = Hash.stringToWords(input);
    const initialHashValues: number[] = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476];

    let a: number = initialHashValues[0];
    let b: number = initialHashValues[1];
    let c: number = initialHashValues[2];
    let d: number = initialHashValues[3];

    const K: number[] = [
        0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee,
        0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501,
        0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be,
        0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821,
        0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa,
        0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
        0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed,
        0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a,
        0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c,
        0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70,
        0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05,
        0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
        0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039,
        0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1,
        0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1,
        0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391
    ];

    const S: number[] = [
        7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
        5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
        4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
        6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
    ];

    for (let i = 0; i < words.length; i += 16) {
        const chunk: number[] = words.slice(i, i + 16);
        const [aa, bb, cc, dd]: number[] = [a, b, c, d];

        for (let j = 0; j < 64; j++) {
            let f: number, g: number;

            if (j < 16) {
                f = (b & c) | ((~b) & d);
                g = j;
            } else if (j < 32) {
                f = (d & b) | ((~d) & c);
                g = (5 * j + 1) % 16;
            } else if (j < 48) {
                f = b ^ c ^ d;
                g = (3 * j + 5) % 16;
            } else {
                f = c ^ (b | (~d));
                g = (7 * j) % 16;
            }

            const temp: number = d;
            d = c;
            c = b;
            b = (b + Hash.leftRotate((a + f + K[j] + chunk[g]) >>> 0, S[j])) >>> 0;
            a = temp;
        }

        a = (a + aa) >>> 0;
        b = (b + bb) >>> 0;
        c = (c + cc) >>> 0;
        d = (d + dd) >>> 0;
    }

    const hashedResult: string = Hash.toHexLittleEndian(a) + Hash.toHexLittleEndian(b) +
        Hash.toHexLittleEndian(c) + Hash.toHexLittleEndian(d);
    const randomIndex: number = crypto.randomInt(Math.max(1, crypto.randomInt(100)) * (hashedResult.length + 1));
    return hashedResult.slice(0, randomIndex) + (salt ? salt : '') + hashedResult.slice(randomIndex);
}