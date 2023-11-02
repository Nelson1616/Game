const express = require('express');

const AreaController = require('../controllers/AreaController');
const CursoController = require('../controllers/CursoController');

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

router.get('/curso', CursoController.index);
router.get('/curso/create', CursoController.create);
router.post('/curso/', CursoController.store);

module.exports = router;