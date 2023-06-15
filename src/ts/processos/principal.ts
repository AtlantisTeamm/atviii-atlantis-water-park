import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPrincipal"
import TipoCadastroCliente from "./tipoCadastroCliente"
import DeletarCliente from "./deletarCliente"
import TipoEditarClientes from "./tipoEditarClientes"
import ListagemAcomodacoes from "./listagemAcomodacoes"
import ListagemAlocados from "./listagemAlocados"
import TipoListagemClientes from "./tipoListagemClientes"
import AlocarCliente from "./alocar"
import DesalocarCliente from "./desalocar"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new TipoEditarClientes();
                this.processo.processar();
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new DeletarCliente()
                this.processo.processar()
                break
            case 5:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break
            case 6:
                this.processo = new ListagemAlocados()
                this.processo.processar()
                break
            case 7:
                this.processo = new AlocarCliente()
                this.processo.processar()
                break
            case 8: 
                this.processo = new DesalocarCliente()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}