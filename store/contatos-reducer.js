import Contato from '../modelo/Contato';
import { ADD_CONTATO, LISTA_CONTATOS } from './contatos-actions'

const estadoInicial = {
    contatos: []
};

export default (estado = estadoInicial, action) => {
    var dadosContato = action.dadosContato;

    switch (action.type) {
        case LISTA_CONTATOS:
            return {
                contatos: action.contatos.map(l => new Contato(l.id.toString(), l.nome, l.celular, l.foto))
            }
        case ADD_CONTATO:
            const c = new Contato(dadosContato.id, dadosContato.nome, dadosContato.celular, dadosContato.foto);

            return {
                contatos: estado.contatos.concat(c)
            };
        default:
            return estado;
    }
}
