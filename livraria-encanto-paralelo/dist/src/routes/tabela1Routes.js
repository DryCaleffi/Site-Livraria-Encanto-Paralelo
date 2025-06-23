"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/tabela1Routes.ts
const express_1 = require("express");
const tabela1Controller_1 = __importDefault(require("../controllers/tabela1Controller"));
const router = (0, express_1.Router)();
router.post('/cadastrar', tabela1Controller_1.default.cadastrar);
router.get('/', tabela1Controller_1.default.selecionar);
router.get('/:id', tabela1Controller_1.default.selecionarPorId);
router.put('/atualizar/:id', tabela1Controller_1.default.atualizar);
router.delete('/deletar/:id', tabela1Controller_1.default.deletar);
exports.default = router;
//# sourceMappingURL=tabela1Routes.js.map