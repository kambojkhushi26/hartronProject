const express = require('express');
const mongoose = require('mongoose');

const app = express()

const portId = 5000;
let DB = 'mongodb+srv://kambojkhushi26:mQk06WBkZMTsaX1p@cluster0.mw7lz.mongodb.net/project';

mongoose.connect(DB)
        .then(() => { console.log('MongoBD Connected') })
        .catch((err) => { console.log(err); })

app.listen(portId, () => { console.log(`Server is Running ${portId}`); })