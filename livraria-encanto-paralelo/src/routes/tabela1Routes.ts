import { Router } from 'express';
import Tabela1Controller from '../controllers/tabela1Controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const tabela1Controller = new Tabela1Controller();

// Lista registros da tabela1
router.get('/', authMiddleware, tabela1Controller.selecionar);

// Exibe formulário de cadastro
router.get('/cadastro', authMiddleware, (req, res) => {
    res.render('tabela1/cadastro');
});

// Cadastra novo registro
router.post('/cadastrar', authMiddleware, tabela1Controller.cadastrar);

export default router;