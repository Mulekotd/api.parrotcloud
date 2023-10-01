const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.json());

// Importando módulos da API
const apiRouter = require('./routes/api');
const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const postsRouter = require('./routes/posts');

// Rotas da aplicação
app.use('/api', apiRouter);
app.use('/api/users', usersRouter);
app.use('/api/games', gamesRouter);
app.use('/api/community-posts', postsRouter);

app.get('/', (req, res) => {
    res.set({
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=3600',
        'Accept': 'application/json'
    });
    res.status(200).send('It is Working!');
});

// Middleware para lidar com rotas inexistentes
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
  
// Middleware para lidar com erros
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message,
      },
    });
});

app.listen(port, () => {
    console.log(`API is runnig on port ${port}`);
});