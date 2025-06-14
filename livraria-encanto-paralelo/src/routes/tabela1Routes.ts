// src/routes/tabela1Routes.ts
import { Router } from 'express';
import tabela1Controller from '../controllers/tabela1Controller';

const router = Router();

router.post('/cadastrar', tabela1Controller.cadastrar);
router.get('/', tabela1Controller.selecionar);
router.get('/:id', tabela1Controller.selecionarPorId);
router.put('/atualizar/:id', tabela1Controller.atualizar);
router.delete('/deletar/:id', tabela1Controller.deletar);

export default router;