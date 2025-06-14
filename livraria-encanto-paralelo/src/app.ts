import express from 'express';
const session = require('express-session');
import pagesRoutes from './routes/pagesRoutes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public')); // Para servir CSS/JS

app.use(session({
  secret: 'seu-secret-aqui',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use('/', pagesRoutes);

export default app;