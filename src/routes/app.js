const express = require('express');

const AreaController = require('../controllers/AreaController');

const router = express.Router();

// router.get('/', function(req, res) {
//     res.render('index', {
//         message: 'Olá mundo',
//     });
// });

router.get('/', function(req, res) {
    res.render('about', {});
});

router.get('/game', function(req, res) {
    res.render('game', {});
});

router.get('/area', AreaController.index);

module.exports = router;