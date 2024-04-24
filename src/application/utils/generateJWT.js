import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

export function generateJWTToken(payload, expiresIn) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}