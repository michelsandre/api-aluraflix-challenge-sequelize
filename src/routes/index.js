const express = require("express");
const videos = require("./videosRoute");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send(
      `<h1>API AluraFlix</h1>
        <h4>Endpoints:</h4>
        <ul>
            <li>GET /videos</li>
            <li>GET /videos/id</li>
            <li>POST /videos</li>
            <li>PUT /videos/id</li>
            <li>DELETE /videos/id</li>
        </ul>`
    );
  });

  app.use(express.json(), videos);
};
