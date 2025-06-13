"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const path_1 = __importDefault(require("path"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const tabela1Routes_1 = __importDefault(require("./routes/tabela1Routes"));
const tabela2Routes_1 = __importDefault(require("./routes/tabela2Routes"));
const sqliteConnection_1 = require("../src/database/sqliteConnection");
const pagesRoutes_1 = __importDefault(require("./routes/pagesRoutes"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));
// Set view engine
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
// Static files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Routes
app.use('/', pagesRoutes_1.default);
app.use('/auth', authRoutes_1.default);
app.use('/tabela1', tabela1Routes_1.default);
app.use('/tabela2', tabela2Routes_1.default);
// Database connection
(0, sqliteConnection_1.sqliteConnection)();
exports.default = app;
