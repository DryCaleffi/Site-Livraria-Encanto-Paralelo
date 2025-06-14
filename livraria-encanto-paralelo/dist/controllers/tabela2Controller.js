"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tabela2Model_1 = __importDefault(require("../models/tabela2Model"));
class Tabela2Controller {
    async cadastrar(req, res) {
        const { campo1, campo2 } = req.body;
        try {
            await tabela2Model_1.default.cadastrar({ campo1, campo2 });
            // Redireciona para a lista após cadastrar
            res.redirect('/tabela2');
        }
        catch (error) {
            res.status(500).render('erro', { message: 'Erro ao cadastrar registro', error });
        }
    }
    async selecionar(req, res) {
        try {
            const registros = await tabela2Model_1.default.selecionar();
            // Renderiza a view passando os registros
            res.render('tabela2/lista', { registros });
        }
        catch (error) {
            res.status(500).render('erro', { message: 'Erro ao selecionar registros', error });
        }
    }
}
exports.default = new Tabela2Controller();
