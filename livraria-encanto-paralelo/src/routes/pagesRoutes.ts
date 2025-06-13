import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/Aba_promocoes', (req, res) => {
    res.render('pages/Aba_promocoes');
});

router.get('/Aba_Inicio', (req, res) => {
    res.render('pages/Aba_Inicio');
});

export default router;