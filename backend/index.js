const connectToMongo = require('./db');
connectToMongo();
var cors = require('cors') 

const express = require('express')
const app = express()
const port = 5000

app.listen(port, () => {
  console.log(`connected: port: ${port}`)
})