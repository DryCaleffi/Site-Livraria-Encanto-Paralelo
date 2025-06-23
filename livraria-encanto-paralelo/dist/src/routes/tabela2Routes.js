"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tabela2Controller_1 = __importDefault(require("../controllers/tabela2Controller"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Lista registros da tabela2
router.get('/', authMiddleware_1.authMiddleware, tabela2Controller_1.default.selecionar);
// Exibe formulário de cadastro
router.get('/cadastro', authMiddleware_1.authMiddleware, (req, res) => {
    res.render('tabela2/cadastro');
});
// Cadastra novo registro
router.post('/cadastrar', authMiddleware_1.authMiddleware, tabela2Controller_1.default.cadastrar);
exports.default = router;
//# sourceMappingURL=tabela2Routes.js.map