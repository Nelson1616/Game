const express = require('express');

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

module.exports = router;