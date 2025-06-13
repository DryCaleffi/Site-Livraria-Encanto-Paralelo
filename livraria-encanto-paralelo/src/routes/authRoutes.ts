import { Router } from 'express';
import { registerUser, login } from '../controllers/authController';

const router = Router();

// Exibe o formulário de login
router.get('/login', (req, res) => {
    res.render('auth/login');
});

// Exibe o formulário de cadastro de usuário
router.get('/register', (req, res) => {
    res.render('auth/register');
});

// Processa o cadastro de usuário
router.post('/register', registerUser);

// Processa o login
router.post('/login', login);

export default router;