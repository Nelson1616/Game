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

export default router;