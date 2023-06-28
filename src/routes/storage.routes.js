const router = require("express").Router()
const uploadMidleware = require("../shared/helpers/handleStorage")
const {createItem} = require("../controllers/storage")


router.post("/", uploadMidleware.single("myfile"), createItem)

module.exports = router