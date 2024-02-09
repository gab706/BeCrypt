const encrypt = require('./security/encryption/encrypt');
const decrypt = require('./security/encryption/decrypt');

const md5 = require('./security/hashing/md5');
const sha256 = require('./security/hashing/sha256');

const charSalt = require('./security/salting/charSalt');
const seedSalt = require('./security/salting/seedSalt');
const sinSalt = require('./security/salting/sinSalt');

module.exports = {
    encrypt,
    decrypt,
    md5,
    sha256,
    charSalt,
    seedSalt,
    sinSalt
};