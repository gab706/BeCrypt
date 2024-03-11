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
declare const _default: (originalKey: string, encryptedData: string) => any;
export default _default;
//# sourceMappingURL=decrypt.d.ts.map