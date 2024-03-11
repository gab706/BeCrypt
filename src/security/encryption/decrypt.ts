'use strict';

/**
 * Decrypts the encrypted data using the original key.
 *
 * This function takes the original key and the encrypted data, then decrypts the data
 * using a bitwise XOR operation with the original key. The decrypted data is then parsed
 * as JSON, and if successful, the parsed result is returned; otherwise, the decrypted
 * data is returned as is.
 *
 * @param {string} originalKey - The original key used for encryption.
 * @param {string} encryptedData - The encrypted data to be decrypted.
 * @returns {any} The decrypted data, parsed as JSON if possible, or the raw decrypted data.
 */
export default (originalKey: string, encryptedData: string): any => {
    let decryptedData: string = '';

    for (let i = 0; i < encryptedData.length; i++) {
        decryptedData += String.fromCharCode(
            encryptedData.charCodeAt(i) ^
            originalKey.charCodeAt(i % originalKey.length)
        );
    }

    try {
        return JSON.parse(decryptedData);
    } catch (error: any) {
        console.error('Error parsing decrypted data as JSON:', error.message);
        return null;
    }
}