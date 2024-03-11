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
declare const _default: (input: string, salt?: string | null) => string;
export default _default;
//# sourceMappingURL=md5.d.ts.map