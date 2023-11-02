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
router.get('/curso/:id', CursoController.show);
router.post('/curso/delete/:id', CursoController.destroy);
router.get('/curso/edit/:id', CursoController.edit);
router.post('/curso/update/', CursoController.update);

module.exports = router;