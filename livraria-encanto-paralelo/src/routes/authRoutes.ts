// src/routes/authRoutes.ts
import { Router } from 'express';


const router = Router();


// Rotas para renderizar páginas (se você estiver usando templates)
router.get('/login', (req, res) => {
    res.render('auth/login'); // ou res.sendFile() se for HTML estático
});

router.get('/register', (req, res) => {
    res.render('auth/register'); // ou res.sendFile() se for HTML estático
});

export default router;