"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('index');
});
router.get('/Aba_promocoes', (req, res) => {
    res.render('pages/Aba_promocoes');
});
router.get('/Aba_Inicio', (req, res) => {
    res.render('pages/Aba_Inicio');
});
exports.default = router;
