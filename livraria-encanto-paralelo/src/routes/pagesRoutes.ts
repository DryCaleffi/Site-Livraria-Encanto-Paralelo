import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/index');
});

router.get('/Aba_Inicio', (req, res) => {
  res.render('pages/Aba_Inicio');
});

router.get('/Aba_promocoes', (req, res) => {
  res.render('pages/Aba_promocoes');
});

// Adicione outras rotas conforme necessário, sempre apontando para o arquivo EJS correspondente

export default router;