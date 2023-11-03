module.exports = {
  "development": {
    "host": process.env.DBHOST,
    "port": process.env.DBPORT,
    "user": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": process.env.DATABASE,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
