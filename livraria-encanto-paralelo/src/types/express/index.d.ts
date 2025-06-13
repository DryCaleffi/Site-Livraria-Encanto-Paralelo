import 'express-session';

declare module 'express-session' {
    interface SessionData {
        userId?: number;
        // adicione outros campos se necessário
    }
}