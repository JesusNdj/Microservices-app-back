const express = require('express')
const commentRouter = require('./routers/comments')
const app = express();

app.use(express.json());
app.use(commentRouter);

module.exports = app;