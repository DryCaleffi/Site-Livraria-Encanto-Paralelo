import { Request, Response } from 'express';
import tabela2Model from '../models/tabela2Model';

class Tabela2Controller {
    async cadastrar(req: Request, res: Response) {
        const { campo1, campo2 } = req.body;
        try {
            await tabela2Model.cadastrar({ campo1, campo2 });
            // Redireciona para a lista após cadastrar
            res.redirect('/tabela2');
        } catch (error) {
            res.status(500).render('erro', { message: 'Erro ao cadastrar registro', error });
        }
    }

    async selecionar(req: Request, res: Response) {
        try {
            const registros = await tabela2Model.selecionar();
            // Renderiza a view passando os registros
            res.render('tabela2/lista', { registros });
        } catch (error) {
            res.status(500).render('erro', { message: 'Erro ao selecionar registros', error });
        }
    }
}

export default new Tabela2Controller();