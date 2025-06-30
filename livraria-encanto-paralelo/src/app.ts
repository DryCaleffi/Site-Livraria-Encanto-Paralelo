import express from 'express';
import session from 'express-session';
import path from 'path';
import pagesRoutes from './routes/pagesRoutes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));

app.use(session({
  secret: 'seu-secret-aqui',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', pagesRoutes);

export default app;