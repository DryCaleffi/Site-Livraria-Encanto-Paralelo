"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    // Agora isso funcionará sem erro
    if (req.session && req.session.userId) {
        next();
    }
    else {
        res.status(401).json({ error: 'Não autorizado' });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map