require("dotenv").config()
const express = require("express")
const dbConnect = require("./config/mongo")
const cors = require("cors")

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3021

app.listen(PORT, ()=>{
  console.log(`🚀 the app is running on http://localhost:${PORT}`)
})

dbConnect()