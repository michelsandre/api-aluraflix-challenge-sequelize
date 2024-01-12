const Controller = require("./Controller.js");
const VideoServices = require("../services/VideoServices.js");

const videoServices = new VideoServices();

class VideoController extends Controller {
  constructor() {
    super(videoServices);
  }
}

module.exports = VideoController;
