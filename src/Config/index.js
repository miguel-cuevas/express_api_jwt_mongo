/* eslint-disable no-undef */
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });

exports.app = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
};

exports.jwt = {
  secret: process.env.JWT_SECRET,
};

exports.mongo = {
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  db: process.env.MONGO_DB,
};

