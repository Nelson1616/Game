const express = require('express');
const handlebars = require('express-handlebars');
const logger = require("morgan");
const sass = require('node-sass-middleware');

const appRouter = require('./routes/app.js');

const port = 8080;

const app = express();

app.use(express.json());

app.use(logger("short"));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(sass({
    src: './public/scss',
    dest: './public/css',
    outputStyle: 'compressed',
    prefix: '/css',
}));

app.use('/images', [
    express.static('./public/images')
]);

app.use('/css', [
    express.static('./public/css')
]);

app.use('/js', [
    express.static('./public/js'),
    express.static('./node_modules/bootstrap/dist/js/')
]);

app.use('/webfonts', [
    express.static('./node_modules/@fortawesome/fontawesome-free/webfonts')
]);

app.use('/', appRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});