import { Router } from 'express';
import { insertUser, findUserByEmail, getAllUsers } from '../models/userModel';
import { getAllLivros, insertLivro } from '../models/livrosModels';
import multer from 'multer';
import path from 'path';

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/imagens/livros'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

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

router.get('/livros', async (req, res) => {
  const livros = await getAllLivros();
  res.render('pages/Livros', { livros });
});

router.post('/livros/cadastrar', upload.single('imagem'), async (req, res) => {
  const { titulo, autor, editora, ano } = req.body;
  const imagem = req.file ? '/imagens/livros/' + req.file.filename : null;
  try {
    // Verifica se já existe livro com mesmo título e autor
    const livros = await getAllLivros();
    const jaExiste = livros.some(livro =>
      livro.titulo.trim().toLowerCase() === titulo.trim().toLowerCase() &&
      livro.autor.trim().toLowerCase() === autor.trim().toLowerCase()
    );
    if (jaExiste) {
      return res.status(400).json({ error: 'Livro já cadastrado!' });
    }

    await insertLivro(titulo, autor, editora, ano ? Number(ano) : null, imagem);
    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao cadastrar livro');
  }
});


export default router;

