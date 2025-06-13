"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tabela1Controller_1 = __importDefault(require("../controllers/tabela1Controller"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
const tabela1Controller = new tabela1Controller_1.default();
// Lista registros da tabela1
router.get('/', authMiddleware_1.authMiddleware, tabela1Controller.selecionar);
// Exibe formulário de cadastro
router.get('/cadastro', authMiddleware_1.authMiddleware, (req, res) => {
    res.render('tabela1/cadastro');
});
// Cadastra novo registro
router.post('/cadastrar', authMiddleware_1.authMiddleware, tabela1Controller.cadastrar);
exports.default = router;
