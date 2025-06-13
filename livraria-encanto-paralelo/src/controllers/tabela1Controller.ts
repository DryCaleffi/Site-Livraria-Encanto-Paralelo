import { Request, Response } from 'express';
import Tabela1Model from '../models/tabela1Model';

class Tabela1Controller {
    private tabela1Model: Tabela1Model;

    constructor() {
        this.tabela1Model = new Tabela1Model();
    }

    public async cadastrar(req: Request, res: Response): Promise<void> {
        try {
            const data = req.body;
            await this.tabela1Model.cadastrar(data);
            res.status(201).json({ message: 'Registro cadastrado com sucesso!' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao cadastrar registro', error });
        }
    }

    public async selecionar(req: Request, res: Response): Promise<void> {
        try {
            const registros = await this.tabela1Model.selecionar();
            res.status(200).json(registros);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao selecionar registros', error });
        }
    }
}

export default Tabela1Controller;