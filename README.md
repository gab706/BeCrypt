# BeCrypt Module README

## Overview

The BeCrypt module is a Node.js module that offers comprehensive security functionalities, including encryption, decryption, and various hashing techniques. It provides implementations for MD5 and SHA-256 hashing, along with different methods for generating random salts.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
    - [Encryption and Decryption](#encryption)
    - [Hashing](#hashing)
    - [Salting](#salting)
3. [API Reference](#api-reference)
    - [Encryption](#encryption)
    - [Hashing](#hashing-api)
    - [Salting](#salting-api)
4. [Contributing](#contributing)
5. [License](#license)

## Installation

To use the BeCrypt module in your Node.js project, you can install it using npm:

```bash
npm install becrypt
```

## Usage
### Encryption
The BeCrypt module provides functions for encrypting and decrypting data using a complex key generated based on specified hash and salt types.

```javascript
const becrypt = require('becrypt');

// Encrypt data
const { hashedKey, encryptedData } = becrypt.encrypt("Hello, World!", 'sha256', 'char');

// Decrypt data
const decryptedData = becrypt.decrypt(hashedKey, encryptedData);
console.log(decryptedData);
```

### Hashing
BeCrypt supports `MD5` and `SHA-256` hashing algorithms. You can hash a string with or without salt.

```javascript
const security = require('becrypt');

// Hashing with salt
const hashedWithSalt = security.md5("password123", "seed");

// Hashing without salt
const hashedWithoutSalt = security.sha256("password123");
```

### Salting
BeCrypt provides different methods for generating random salts: `charSalt`, `seedSalt`, and `sinSalt`.
```javascript
const security = require('becrypt');

// Generate random salts
const charSalt = security.charSalt();
const seedSalt = security.seedSalt();
const sinSalt = security.sinSalt();
```

## API Reference
### Encryption API
```javascript
security.encrypt(data, hashType, saltType)
```
Encrypts data using a complex key generated based on the specified hash and salt types.
- `data` - The data to be encrypted.
- `hashType` - The hash type to be used for key generation ('md5' or 'sha256').
- `saltType` - The salt type for key generation ('char', 'sin', 'seed', or null).

Returns an object containing the generated key (hashedKey) and the encrypted data (encryptedData).

```json
{
  "hashedKey": "##############################",
  "encryptedData": "##############################"
}
```
---
```javascript
security.decrypt(originalKey, encryptedData)
```
Decrypts the encrypted data using the original hashed key.
- `originalKey` - The original hashed key used for encryption.
- `encryptedData` - The encrypted data to be decrypted.

Returns the decrypted data, parsed as JSON if possible, or the raw decrypted data.

### Hashing API
```javascript
security.sha256(input, salt)
```
Hashes the input using the SHA-256 algorithm with optional salting.
- `input` - The input string to be hashed.
- `salt` - The type of salt to be used ('seed', 'sin', 'char', or null to not set).

Returns the hashed result with optional salt.

---

```javascript
security.md5(input, salt)
```
Hashes the input using the MD5 algorithm with optional salting.
- `input` - The input string to be hashed.
- `salt` - The type of salt to be used ('seed', 'sin', 'char', or null to not set).

Returns the hashed result with optional salt.

### Salting API
```javascript
security.charSalt()
```
Generates a cryptographic random salt based on bitwise operators.

---

```javascript
security.seedSalt()
```
Generates a random salt using a non-cryptographic pseudo-random number generator based on the time.

---

```javascript
security.sinSalt()
```
Generates a cryptographic random salt based on trigonometry.

## Contributing
If you'd like to contribute to this project, please read the contributing guide.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/gab706/BeCrypt/blob/production/LICENSE) file for details.