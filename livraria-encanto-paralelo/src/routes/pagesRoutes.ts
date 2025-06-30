import { Router } from 'express';
import { insertUser, findUserByEmail, getAllUsers } from '../models/userModel';

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

// Cadastro de usuário
router.post('/Aba_promocoes', async (req, res) => {
  console.log(req.body); 
  const { nome, email, cpf, telefone, password } = req.body;
  try {
    await insertUser(nome, email, cpf, telefone, password);
    const user = await findUserByEmail(email);
    req.session.user = user;
    // Redireciona para a página inicial ou outra página logada
    res.redirect('/Aba_Inicio');
  } catch (error) {
    res.render('pages/Aba_promocoes', { error: 'Erro ao cadastrar usuário. E-mail já cadastrado ou dados inválidos.' });
  }
});

// Página de login
router.get('/login', (req, res) => {
  res.render('pages/login');
});

// Processa login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (user && user.password === password) {
    req.session.user = user;
    res.json({ success: true });
  } else {
    res.json({ success: false, error: 'E-mail ou senha inválidos.' });
  }
});

router.get('/usuarios', async (req, res) => {
  const usuarios = await getAllUsers();
  res.render('pages/usuarios', { usuarios });
});

router.get('/testa-usuarios', async (req, res) => {
  const usuarios = await getAllUsers();
  res.json(usuarios);
});

export default router;