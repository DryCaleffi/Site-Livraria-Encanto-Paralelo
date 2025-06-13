import express from 'express';
import session from 'express-session';
import path from 'path';
import authRoutes from './routes/authRoutes';
import tabela1Routes from './routes/tabela1Routes';
import tabela2Routes from './routes/tabela2Routes';
import {sqliteConnection} from '../src/database/sqliteConnection';
import pagesRoutes from './routes/pagesRoutes';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', pagesRoutes);
app.use('/auth', authRoutes);
app.use('/tabela1', tabela1Routes);
app.use('/tabela2', tabela2Routes);

// Database connection
sqliteConnection();

export default app;