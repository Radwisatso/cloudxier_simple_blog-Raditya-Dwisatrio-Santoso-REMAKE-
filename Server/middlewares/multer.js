const multer = require("multer")

let storage = multer.memoryStorage()
let upload = multer({storage: storage})
let uploadImage = upload.single("image")

module.exports = uploadImage