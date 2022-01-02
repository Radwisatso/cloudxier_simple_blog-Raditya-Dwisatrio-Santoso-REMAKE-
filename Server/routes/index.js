const router = require("express").Router()
const fishRoute = require("./fishRoute")
const errorHandler =  require("../middlewares/errorHandler")

router.use("/", fishRoute)
router.use(errorHandler)

module.exports = router