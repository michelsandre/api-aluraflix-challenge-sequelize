const { Router } = require("express");
const VideoController = require("../controllers/VideoController.js");

const videoController = new VideoController();

const router = Router();

router.get("/videos", (req, res) => videoController.getAllRegisters(req, res));
router.get("/videos/:id", (req, res) =>
  videoController.getRegisterById(req, res)
);
router.put("/videos/:id", (req, res) =>
  videoController.updateRegister(req, res)
);
router.post("/videos", (req, res) => videoController.createRegister(req, res));

router.delete("/videos/:id", (req, res) =>
  videoController.deleteRegister(req, res)
);

module.exports = router;
