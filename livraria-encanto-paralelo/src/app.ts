import express from 'express';
import session from 'express-session';
import path from 'path';

const app = express();

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

export default app;