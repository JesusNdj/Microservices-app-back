const express = require('express')
const postsRouter = require('./routers/post')
const app = express();

app.use(express.json());
app.use(postsRouter);

module.exports = app;