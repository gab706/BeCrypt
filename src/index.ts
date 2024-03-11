'use strict';
import encrypt from './security/encryption/encrypt.js';
import decrypt from './security/encryption/decrypt.js';

import md5 from './security/hashing/md5.js';
import sha256 from './security/hashing/sha256.js';

import charSalt from './security/salting/charSalt.js';
import sinSalt from './security/salting/sinSalt.js';
import seedSalt from './security/salting/seedSalt.js';

export default {
    encrypt,
    decrypt,
    md5,
    sha256,
    charSalt,
    seedSalt,
    sinSalt
};