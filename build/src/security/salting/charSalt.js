import crypto from 'crypto';
/**
 * Generates a cryptographic random salt based on bitwise operators.
 *
 * @returns {string} - A randomly generated salt.
 *
 * @description
 * This function uses bitwise operations to create a cryptographic random salt.
 *
 * @example
 * const salt = charSalt();
 */
export default () => {
    const minLength = crypto.randomInt(10) + 1;
    const maxLength = crypto.randomInt(10) + 11;
    const length = crypto.randomInt(maxLength - minLength + 1) + minLength;
    const randomBytes = crypto.randomBytes(length);
    let salt = "";
    for (let i = 0; i < length; i++) {
        const randomByte = randomBytes[i];
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const randomIndex = Math.floor(randomByte / 255 * charset.length);
        salt += charset.charAt(randomIndex);
    }
    return salt;
};
