const router = require("express").Router();
const Pin = require("../models/Pin");

// create a pin
router.post("/", async (req, res) => {
  try {
    const responsePin = await Pin.create(req.body);
    res.json(responsePin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get all pin
router.get("/", async (req, res) => {
  try {
    const responsePins = await Pin.find();
    res.json(responsePins);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
