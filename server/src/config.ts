const { DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const DB_TYPE = 'postgres';
const DB_HOST = 'db';
const DB_PORT = 5432;
const DB_SYNCHRONIZE = false;

export {
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  DB_TYPE,
  DB_HOST,
  DB_PORT,
  DB_SYNCHRONIZE,
};
