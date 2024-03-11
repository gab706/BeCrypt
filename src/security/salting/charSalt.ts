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
export default (): string => {
    const minLength: number = crypto.randomInt(10) + 1;
    const maxLength: number = crypto.randomInt(10) + 11;
    const length: number = crypto.randomInt(maxLength - minLength + 1) + minLength;
    const randomBytes: Buffer = crypto.randomBytes(length);
    let salt: string = "";

    for (let i = 0; i < length; i++) {
        const randomByte: number = randomBytes[i];
        const charset: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const randomIndex: number = Math.floor(randomByte / 255 * charset.length);
        salt += charset.charAt(randomIndex);
    }

    return salt;
}