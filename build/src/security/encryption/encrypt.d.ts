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
declare const _default: (data: any, hashType: 'md5' | 'sha256', saltType: 'char' | 'sin' | 'seed' | null) => object;
export default _default;
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
export declare function generateKey(hashType: 'md5' | 'sha256', saltType: 'char' | 'sin' | 'seed' | null): string;
//# sourceMappingURL=encrypt.d.ts.map