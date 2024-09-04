
const express = require('express');
const cors = require('cors');
const config = require('../config/config');

async function start() {

  const app = express();
  app.use(express.json());
  app.use(cors());

  app.get("/", (req, res) => {
    res.status(200).send('Server running');
  });

  app.get("/list", (req, res) => {
    res.status(200).send(["element1", "element2", "element3"]);
  })

  app.listen(config.app.port, '0.0.0.0', () => {
    console.log(`Server running on port ${config.app.port}`);
  });
}

module.exports = {
  start,
};
