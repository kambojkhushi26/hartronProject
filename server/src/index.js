const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes')
require('dotenv').config()

const app = express()
app.use(express.json())

const portId = 5000 || process.env.PORT;

mongoose.connect(process.env.MongooseDB)
        .then(() => { console.log('MongoDB Connected') })
        .catch((err) => { console.log(err); })

app.use('/', router)

app.listen(portId, () => { console.log(`Server is Running ${portId}`); })
