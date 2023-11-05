const express = require('express');
const listBooks = require('./controller/listBooks.js');

const routes = express();

routes.get('/books', listBooks);

module.exports = routes;