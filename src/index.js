import express from 'express';
import apiRouter from './routes/api.js';
import appRouter from './routes/app.js';

const port = 8080;

const app = express();

app.use(express.json());
app.use('/api', apiRouter);
app.use('/', appRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});