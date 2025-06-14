// src/routes/authRoutes.ts
import { Router } from 'express';
import { registerUser, login, logout, findUserController } from '../controllers/authController';

const router = Router();

// Rotas de autenticação
router.post('/register', registerUser);
router.post('/login', login);
router.post('/logout', logout);
router.get('/user/:id', findUserController);

// Rotas para renderizar páginas (se você estiver usando templates)
router.get('/login', (req, res) => {
    res.render('auth/login'); // ou res.sendFile() se for HTML estático
});

router.get('/register', (req, res) => {
    res.render('auth/register'); // ou res.sendFile() se for HTML estático
});

export default router;