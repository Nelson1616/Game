const express = require('express');
const models = require('../models/index');

const router = express.Router();

const Area = models.Area;

router.get('/', async function(req, res) {
    const areas = await Area.findAll();
    res.send(areas);
});

module.exports = router;