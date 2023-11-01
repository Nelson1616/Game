import express from 'express';

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

export default router;