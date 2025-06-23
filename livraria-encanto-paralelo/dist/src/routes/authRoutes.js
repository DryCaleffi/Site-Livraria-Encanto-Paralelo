"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/authRoutes.ts
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
// Rotas de autenticação
router.post('/register', authController_1.registerUser);
router.post('/login', authController_1.login);
router.post('/logout', authController_1.logout);
router.get('/user/:id', authController_1.findUserController);
// Rotas para renderizar páginas (se você estiver usando templates)
router.get('/login', (req, res) => {
    res.render('auth/login'); // ou res.sendFile() se for HTML estático
});
router.get('/register', (req, res) => {
    res.render('auth/register'); // ou res.sendFile() se for HTML estático
});
exports.default = router;
//# sourceMappingURL=authRoutes.js.map