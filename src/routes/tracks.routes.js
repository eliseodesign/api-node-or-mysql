const router = require("express").Router()

router.get("/",(req,res)=>{
  const data = ["Hola","mudno"]
  res.send({data})
})

module.exports = router