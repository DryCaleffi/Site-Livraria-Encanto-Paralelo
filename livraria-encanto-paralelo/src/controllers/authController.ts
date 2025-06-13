// src/controllers/authController.ts
import { Request, Response } from 'express';
import db from '../database/sqlite';
import { User } from '../models/userModel';
import { Router } from 'express';
import { registerUser, login } from '../controllers/authController';

export const registerUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ "error": "Nome de usuário e senha são obrigatórios" });
    }

    const sql = 'INSERT INTO login (username, password) VALUES (?,?)';
    const params = [username, password]; // Em produção, use bcrypt para hashear a senha

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(400).json({ "error": err.message });
        }
        // Redireciona para login após cadastro bem-sucedido
        res.redirect('/auth/login');
    });
};

export const findUserController = (req: Request, res: Response) => {
    const { id } = req.params;
    const sql = "SELECT id, username FROM login WHERE id = ?";

    db.get(sql, [id], (err, row: User) => {
        if (err) {
            return res.status(400).json({ "error": err.message });
        }
        if (!row) {
            return res.status(404).json({ "error": "Usuário não encontrado" });
        }
        res.json({
            "message": "success",
            "data": row
        });
    });
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    const user = await userModel.findUser(username, password);

    if (user) {
        req.session.userId = user.id;
        res.redirect('/tabela1'); // Redireciona para a página da tabela1 após login
    } else {
        res.status(401).render('auth/login', { error: 'Credenciais inválidas' });
    }
};

export const logout = (req: Request, res: Response): void => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Erro ao encerrar sessão');
        }
        res.redirect('/auth/login'); // Redireciona para a página de login
    });
};

// Adicionando a exportação do registerUser e login
// src/routes/authRoutes.ts


const router = Router();

router.post('/register', registerUser);
router.post('/login', login);

export default router;