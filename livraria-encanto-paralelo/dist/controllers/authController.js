"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.findUser = exports.registerUser = void 0;
const sqlite_1 = __importDefault(require("../database/sqlite"));
const userModel_1 = __importDefault(require("../models/userModel")); // Corrija este import
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ "error": "Nome de usuário e senha são obrigatórios" });
    }
    const sql = 'INSERT INTO login (username, password) VALUES (?,?)';
    const params = [username, password]; // Em produção, use bcrypt para hashear a senha
    sqlite_1.default.run(sql, params, function (err) {
        if (err) {
            return res.status(400).json({ "error": err.message });
        }
        // Redireciona para login após cadastro bem-sucedido
        res.redirect('/auth/login');
    });
});
exports.registerUser = registerUser;
const findUser = (req, res) => {
    const { id } = req.params;
    const sql = "SELECT id, username FROM login WHERE id = ?";
    sqlite_1.default.get(sql, [id], (err, row) => {
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
exports.findUser = findUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield userModel_1.default.findUser(username, password);
    if (user) {
        req.session.userId = user.id;
        res.redirect('/tabela1'); // Redireciona para a página da tabela1 após login
    }
    else {
        res.status(401).render('auth/login', { error: 'Credenciais inválidas' });
    }
});
exports.login = login;
const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Erro ao encerrar sessão');
        }
        res.redirect('/auth/login'); // Redireciona para a página de login
    });
};
exports.logout = logout;
// src/routes/authRoutes.ts
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
router.post('/register', exports.registerUser);
router.post('/login', exports.login);
exports.default = router;
