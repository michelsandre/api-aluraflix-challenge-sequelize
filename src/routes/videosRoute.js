const { Router } = require("express");
const VideoController = require("../controllers/VideoController.js");

const videoController = new VideoController();

const router = Router();

router.get("/videos", (req, res) => videoController.getAllRegisters(req, res));
router.get("/videos/:id", (req, res) =>
  videoController.getRegisterById(req, res)
);
router.post("/videos", (req, res) => videoController.createRegister(req, res));

module.exports = router;
