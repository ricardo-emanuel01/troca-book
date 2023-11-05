require('dotenv').config();
module.exports = {
  "development": {
    "host": process.env.DBHOST,
    "port": process.env.DBPORT,
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": process.env.DATABASE,
    "dialect": "postgres",
    "ssl":true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, 
      },
    },
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
