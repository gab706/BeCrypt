import crypto from 'crypto';
/**
 * Generates a random salt using a non-cryptographic pseudo-random number generator.
 *
 * @returns {string} - A randomly generated salt.
 *
 * @description
 * This function uses a non-cryptographic pseudo-random number generator to generate a random salt.
 * It should not be used for security-sensitive applications; consider using a cryptographic option
 * like charSalt or seedSalt
 *
 * The pseudo-random number generator is based on a simple XOR-based algorithm using a seed derived from
 * the current timestamp. While suitable for non-cryptographic purposes, it may not provide the same level
 * of security as a true cryptographic random number generator.
 *
 *
 * @example
 * const salt = seedSalt();
 */
export default () => {
    const minLength = crypto.randomInt(10) + 1;
    const maxLength = crypto.randomInt(10) + 11;
    const length = crypto.randomInt(maxLength - minLength + 1) + minLength;
    let seed = Date.now();
    let salt = "";
    for (let i = 0; i < length; i++) {
        seed ^= (seed << 21);
        seed ^= (seed >>> 3);
        seed ^= (seed << 4);
        const randomByte = (seed & 0xff) / 255;
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const randomIndex = Math.floor(randomByte * charset.length);
        salt += charset.charAt(randomIndex);
    }
    return salt;
};
