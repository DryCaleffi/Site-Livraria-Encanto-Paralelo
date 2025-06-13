import { Router } from 'express';
import tabela2Controller from '../controllers/tabela2Controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Lista registros da tabela2
router.get('/', authMiddleware, tabela2Controller.selecionar);

// Exibe formulário de cadastro
router.get('/cadastro', authMiddleware, (req, res) => {
    res.render('tabela2/cadastro');
});

// Cadastra novo registro
router.post('/cadastrar', authMiddleware, tabela2Controller.cadastrar);

export default router;