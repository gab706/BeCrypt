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
declare const _default: () => string;
export default _default;
//# sourceMappingURL=seedSalt.d.ts.map