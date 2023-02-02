// File required for local and hosted apps

// http://vitaly-t.github.io/pg-promise/module-pg-promise.html
const pgp = require('pg-promise')();
require('dotenv').config();

// const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, password } =
//   process.env;
// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

// alt from express docs
// var db = pgp('postgres://username:password@host:port/database')

const db = pgp(cn);

module.exports = db;
