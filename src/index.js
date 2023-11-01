import express from 'express';
import handlebars from 'express-handlebars';
import apiRouter from './routes/api.js';
import appRouter from './routes/app.js';

const port = 8080;

const app = express();

app.use(express.json());
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/api', apiRouter);
app.use('/', appRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});