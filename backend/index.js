
const connectToMongo =require('./db')
const express = require('express')
connectToMongo( ) // this function is comeing from db.js 



const app = express()
const port = 3000


// avaliable routes 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
}) 