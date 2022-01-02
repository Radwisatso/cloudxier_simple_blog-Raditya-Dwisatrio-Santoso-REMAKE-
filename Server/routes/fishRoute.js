const FishController = require("../controllers/fishController")
const router = require("express").Router()
const imageKit = require("../middlewares/imageKit")
const uploadImage = require("../middlewares/multer")

router.get("/fishes", FishController.getFish)
router.get("/fishes/:id", FishController.getFishById)
router.post("/fishes", uploadImage, imageKit, FishController.addFish)
router.put("/fishes/:id", uploadImage, imageKit, FishController.updateFish)
router.delete("/fishes/:id",FishController.deleteFish)

module.exports = router