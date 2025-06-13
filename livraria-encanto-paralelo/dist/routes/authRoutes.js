"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
// Exibe o formulário de login
router.get('/login', (req, res) => {
    res.render('auth/login');
});
// Exibe o formulário de cadastro de usuário
router.get('/register', (req, res) => {
    res.render('auth/register');
});
// Processa o cadastro de usuário
router.post('/register', authController_1.registerUser);
// Processa o login
router.post('/login', authController_1.login);
exports.default = router;
