const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const PORT = 3021

app.listen(PORT, ()=>{
  console.log(`🚀 the app is running on http://localhost:${PORT}`)
})