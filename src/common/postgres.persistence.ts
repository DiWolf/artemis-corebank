import { Pool } from "pg";

export default new Pool({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.DBPASS,
  port: Number(process.env.DBPORT),
});
