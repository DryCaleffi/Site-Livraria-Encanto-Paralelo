"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserController = exports.logout = exports.login = exports.registerUser = void 0;
const registerUser = async (req, res) => {
    try {
        // Lógica de registro
        res.status(201).json({ message: 'Usuário criado com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};
exports.registerUser = registerUser;
const login = async (req, res) => {
    try {
        // Lógica de login
        const user = { id: '123', email: 'user@example.com' };
        // Agora isso funcionará sem erro
        req.session.userId = user.id;
        res.status(200).json({ message: 'Login realizado com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};
exports.login = login;
const logout = async (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao fazer logout' });
            }
            res.status(200).json({ message: 'Logout realizado com sucesso' });
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao fazer logout' });
    }
};
exports.logout = logout;
const findUserController = async (req, res) => {
    try {
        // Lógica para encontrar usuário
        res.status(200).json({ user: 'dados do usuário' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
};
exports.findUserController = findUserController;
//# sourceMappingURL=authController.js.map