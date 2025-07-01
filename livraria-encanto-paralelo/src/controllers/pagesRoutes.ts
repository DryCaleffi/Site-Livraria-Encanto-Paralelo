import { Router } from 'express';
import { insertUser, findUserByEmail, getAllUsers } from '../models/userModel';

const router = Router();
// Rotas das páginas- > PRINCIPAL
router.get('/', (req, res) => {
  res.render('pages/index');
});
// Rotas das páginas- > Aba de Incio e Promoções
router.get('/Aba_Inicio', (req, res) => {
  res.render('pages/Aba_Inicio');
});

router.get('/Aba_promocoes', (req, res) => {
  res.render('pages/Aba_promocoes');
});

// Cadastro de usuário
router.post('/auth/register', async (req, res) => {
  console.log(req.body); // adicionando um console log para aparecer no terminal as informações do usuário
  const { nome, email, cpf, telefone, password } = req.body; // adicionando as variáveis para receber os dados do usuário
  try {
    await insertUser(nome, email, cpf, telefone, password); 
    const user = await findUserByEmail(email);
    req.session.user = user;
    // Redireciona para a página inicial 
    res.redirect('/Aba_Inicio');
  } catch (error) {
    res.render('pages/Aba_promocoes', { error: 'Erro ao cadastrar usuário. E-mail já cadastrado ou dados inválidos.' });
  }
});

// Página de login
router.get('/login', (req, res) => {
  res.render('pages/login');
});

// Processa login - email no cadastro é o email e acesso e o mesmo vale para senha
router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login recebido:', email, password);
  const user = await findUserByEmail(email);
  console.log('Usuário encontrado:', user);
  if (user && user.password === password) {
    req.session.user = user;
    res.json({ success: true });
  } else {
    res.json({ success: false, error: 'E-mail ou senha inválidos.' });
  }
});


export default router;

