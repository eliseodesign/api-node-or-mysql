require("dotenv").config()
const dbConnect = require("./src/config/mongo")
const app = require("./src/app")

const PORT = process.env.PORT || 3021

app.listen(PORT, ()=>{
  console.log(`Server app is running on http://localhost:${PORT}`)
})

dbConnect()
