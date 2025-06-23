"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const session = require('express-session');
const pagesRoutes_1 = __importDefault(require("./routes/pagesRoutes"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express_1.default.static(__dirname + '/public')); // Para servir CSS/JS
app.use(session({
    secret: 'seu-secret-aqui',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}));
app.use('/', pagesRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map