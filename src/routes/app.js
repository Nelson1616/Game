import express from 'express';

const router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        message: 'Olá mundo',
        layout: false
    });
});

router.get('/about', function(req, res) {
    res.render('about', {
        layout: false
    });
});

export default router;