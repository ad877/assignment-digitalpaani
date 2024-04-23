// encryption.js
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();
const {
  PRODUCT_REGISTRATION_ENCRYPTION_SECRET_KEY,
  PRODUCT_REGISTRATION_ENCRYPTION_SECRET_IV,
  PRODUCT_REGISTRATION_ENCRYPTION_METHOD,
} = process.env;

// Generate secret hash with crypto to use for encryption
const key = crypto
  .createHash('sha512')
  .update(PRODUCT_REGISTRATION_ENCRYPTION_SECRET_KEY || '')
  .digest('hex')
  .substring(0, 32);
const encryptionIV = crypto
  .createHash('sha512')
  .update(PRODUCT_REGISTRATION_ENCRYPTION_SECRET_IV || '')
  .digest('hex')
  .substring(0, 16);

/**
 * @param {string} data to be ecrypted.
 * @return {string} encrypted string
 */
export function encryptData(data) {
  if (
    !PRODUCT_REGISTRATION_ENCRYPTION_SECRET_KEY ||
    !PRODUCT_REGISTRATION_ENCRYPTION_SECRET_IV ||
    !PRODUCT_REGISTRATION_ENCRYPTION_METHOD
  ) {
    throw Error('Cannot encrypt data');
  }
  const cipher = crypto.createCipheriv(
    PRODUCT_REGISTRATION_ENCRYPTION_METHOD,
    key,
    encryptionIV,
  );
  return Buffer.from(
    cipher.update(data, 'utf8', 'hex') + cipher.final('hex'),
  ).toString('base64'); // Encrypts data and converts to hex and base64
}

/**
 * @param {string} encryptedData to be ecrypted.
 * @return {string} decrypted string
 */
export function decryptData(encryptedData) {
  if (
    !PRODUCT_REGISTRATION_ENCRYPTION_SECRET_KEY ||
    !PRODUCT_REGISTRATION_ENCRYPTION_SECRET_IV ||
    !PRODUCT_REGISTRATION_ENCRYPTION_METHOD
  ) {
    throw Error('Cannot decrypt data');
  }
  const buff = Buffer.from(encryptedData, 'base64');
  const decipher = crypto.createDecipheriv(
    PRODUCT_REGISTRATION_ENCRYPTION_METHOD,
    key,
    encryptionIV,
  );
  return (
    decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
    decipher.final('utf8')
  ); // Decrypts data and converts to utf8
}
