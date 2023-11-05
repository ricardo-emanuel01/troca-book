require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

app.use(helmet())
app.use(cors())
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT);