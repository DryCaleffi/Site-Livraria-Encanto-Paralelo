import { Request, Response } from 'express';
export declare const registerUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const findUserController: (req: Request, res: Response) => void;
export declare const login: (req: Request, res: Response) => Promise<void>;
export declare const logout: (req: Request, res: Response) => void;
declare const router: import("express-serve-static-core").Router;
export default router;
//# sourceMappingURL=authController.d.ts.map