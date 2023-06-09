const multer = require("multer")

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    const pathStorage = `${__dirname}/../shared/storage`
    cb(null,pathStorage)
  },
  filename:function(req,file,cb){
    const ext = file.originalname.split(".").pop()
    const filename = `file-${Date.now()}.${ext}`
    cb(null,filename)
  }
})

const uploadMidleware = multer({storage})

module.exports = uploadMidleware