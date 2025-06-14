import { Request, Response } from 'express';
import tabela1Model from '../models/tabela1Model';

class Tabela1Controller {
    async cadastrar(req: Request, res: Response) {
        // lógica de cadastro
    }

    async selecionar(req: Request, res: Response) {
        // lógica de seleção
    }

    async selecionarPorId(req: Request, res: Response) {
        // lógica de seleção por id
    }

    async atualizar(req: Request, res: Response) {
        // lógica de atualização
    }

    async deletar(req: Request, res: Response) {
        // lógica de deleção
    }
}

export default new Tabela1Controller();