"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tabela2Model_1 = __importDefault(require("../models/tabela2Model"));
class Tabela2Controller {
    cadastrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { campo1, campo2 } = req.body;
            try {
                yield tabela2Model_1.default.cadastrar({ campo1, campo2 });
                // Redireciona para a lista após cadastrar
                res.redirect('/tabela2');
            }
            catch (error) {
                res.status(500).render('erro', { message: 'Erro ao cadastrar registro', error });
            }
        });
    }
    selecionar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const registros = yield tabela2Model_1.default.selecionar();
                // Renderiza a view passando os registros
                res.render('tabela2/lista', { registros });
            }
            catch (error) {
                res.status(500).render('erro', { message: 'Erro ao selecionar registros', error });
            }
        });
    }
}
exports.default = new Tabela2Controller();
