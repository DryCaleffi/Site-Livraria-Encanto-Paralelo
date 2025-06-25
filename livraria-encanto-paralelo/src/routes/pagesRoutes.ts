import { Router } from 'express';
import { insertUser } from '../models/userModel';

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
 // Adicionando rota para conseguir enviar informações do formulário
router.post('/Aba_promocoes', async (req, res) => {
  const { nome, email, cpf, telefone } = req.body;
  await insertUser(nome, email, cpf, telefone);
  res.render('pages/Aba_promocoes', { success: 'Cadastro realizado com sucesso!' });
});

import { getAllUsers } from '../models/userModel';

router.get('/usuarios', async (req, res) => {
  const usuarios = await getAllUsers();
  res.render('pages/usuarios', { usuarios });
});

export default router;