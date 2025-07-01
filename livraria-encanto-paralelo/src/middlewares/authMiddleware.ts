import { Request, Response, NextFunction } from 'express';
// Para quando usarmos o middleware de autenticação
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Agora isso funcionará sem erro
  if (req.session && req.session.userId) {
    next();
  } else {
    res.status(401).json({ error: 'Não autorizado' });
  }
};