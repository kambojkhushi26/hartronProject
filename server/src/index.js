const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express()

const portId = 5000 || process.env.PORT;

mongoose.connect(process.env.MongooseDB)
        .then(() => { console.log('MongoBD Connected') })
        .catch((err) => { console.log(err); })

app.listen(portId, () => { console.log(`Server is Running ${portId}`); })
console.log('ravi');