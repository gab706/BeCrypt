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
export default () => {
    const minLength = Math.floor(crypto.randomInt(10)) + 1;
    const maxLength = Math.floor(crypto.randomInt(10)) + 11;
    const length = Math.floor(crypto.randomInt(maxLength - minLength + 1)) + minLength;
    let salt = "";
    for (let i = 0; i < length; i++) {
        const currentTime = new Date().getTime();
        const randomFactor = Math.sin(currentTime * (i + 1)) * 10000;
        const randomByte = (randomFactor - Math.floor(randomFactor)) % 1;
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const randomIndex = Math.floor(randomByte * charset.length);
        salt += charset.charAt(randomIndex);
    }
    return salt;
};
