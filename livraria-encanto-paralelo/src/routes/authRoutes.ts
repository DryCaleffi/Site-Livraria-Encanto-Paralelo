// src/routes/authRoutes.ts
import { Router } from 'express';


const router = Router();

router.get('/login', (req, res) => {
    res.render('auth/login'); 
});

router.get('/register', (req, res) => {
    res.render('auth/register'); 
    
});


export default router;