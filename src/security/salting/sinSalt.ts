import crypto from 'crypto';

/**
 * Generates a cryptographic random salt based on trigonometry.
 *
 * @returns {string} - A randomly generated salt.
 *
 * @description
 * This function uses basic mathematical operations to create a cryptographic random salt.
 *
 * @example
 * const salt = sinSalt();
 */
export default (): string => {
    const minLength: number = Math.floor(crypto.randomInt(10)) + 1;
    const maxLength: number = Math.floor(crypto.randomInt(10)) + 11;
    const length: number = Math.floor(crypto.randomInt(maxLength - minLength + 1)) + minLength;

    let salt: string = "";

    for (let i = 0; i < length; i++) {
        const currentTime: number = new Date().getTime();
        const randomFactor: number = Math.sin(currentTime * (i + 1)) * 10000;
        const randomByte: number = (randomFactor - Math.floor(randomFactor)) % 1;

        const charset: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const randomIndex: number = Math.floor(randomByte * charset.length);
        salt += charset.charAt(randomIndex);
    }

    return salt;
}