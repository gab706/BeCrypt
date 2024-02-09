'use strict';
const md5 = require('../hashing/md5');
const sha256 = require('../hashing/sha256');


/**
 * Encrypts data using a complex key generated based on the specified hash and salt types.
 *
 * This function takes an input and, encrypts in, only allowing a certain key to open it.
 *
 * @note
 * Please note that your original key will not open the data, only the returned key can open it.
 *
 * @param {any} data - The data to be encrypted.
 * @param {'md5' | 'sha256'} hashType - The hash type to be used for key generation ('md5' or 'sha256').
 * @param {'char' | 'sin' | 'seed' | null | undefined } [saltType] - The salt type for key generation ('char', 'sin', 'seed', or null).
 * @returns {Object} An object containing the generated key and the encrypted data.
 * @throws {Error} Throws an error if the salt type is not recognised (use: 'char', 'sin', 'seed', or null).
 * @throws {Error} Throws an error if the hash type is not recognised (use: 'md5' or 'sha256').
 */
module.exports = (data, hashType, saltType) => {
    const stringData = JSON.stringify(data);
    let encryptedData = '';

    const hashedKey = module.exports.generateRandomKey(hashType, saltType);

    for (let i = 0; i < stringData.length; i++) {
        encryptedData += String.fromCharCode(stringData.charCodeAt(i) ^ hashedKey.charCodeAt(i % hashedKey.length));
    }

    return { hashedKey, encryptedData };
}

/**
 * Generates a completely random complex key based on the specified hash and salt types.
 *
 * This function generates a random complex key and then hashes it based on the specified hash and salt types.
 *
 * @param {'md5' | 'sha256'} hashType - The hash type to be used for key generation ('md5' or 'sha256').
 * @param {'char' | 'sin' | 'seed' | null | undefined} [saltType] - The salt type for key generation ('char', 'sin', 'seed', or null).
 * @returns {string} The hashed key.
 * @throws {Error} Throws an error if the salt type is not recognized (use: 'char', 'sin', 'seed', or null).
 * @throws {Error} Throws an error if the hash type is not recognized (use: 'md5' or 'sha256').
 */
module.exports.generateRandomKey = (hashType, saltType) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';

    const generateRandomString = (length) => {
        let randomString = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
        return randomString;
    };

    if (saltType !== null && saltType !== undefined && !['sin', 'char', 'seed'].includes(saltType))
        throw new Error('Salt type not recognised. Use: Char, Sin, or Seed');

    let complexKey = generateRandomString(50);

    let hashedKey;

    switch (hashType) {
        case 'md5':
            hashedKey = md5(complexKey, saltType);
            break;
        case 'sha256':
            hashedKey = sha256(complexKey, saltType);
            break;
        default:
            throw new Error('Hash type not recognised. Use: md5 or sha256');
    }

    return hashedKey;
};