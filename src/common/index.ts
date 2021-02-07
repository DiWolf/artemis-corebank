if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({});
}

module.exports = {
  PORT: process.env.PORT,
  DBUSER: process.env.DBUSER,
  DBPASS: process.env.DBPASS,
  DBNAME: process.env.DBNAME,
  DBPORT: process.env.DBPORT,
  DBHOST: process.env.DBHOST,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  CACHE_KEY: process.env.CACHE_KEY,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET,
};
