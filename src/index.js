require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`)
});