import Menu from "../interfaces/menu";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| Por favor, selecione uma opção...`)
        console.log(`----------------------`)
        console.log("");
        console.log(`| Opções para cliente:`)
        console.log(`| 1 - Cadastrar cliente`)
        console.log(`| 2 - Editar cliente`)
        console.log(`| 3 - Listar cliente(s)`)
        console.log(`| 4 - Excluir cliente`)
        console.log(`----------------------`)
        console.log("");
        console.log(`| Opções para gestão:`)
        console.log(`| 5 - Listar acomodações`)
        console.log(`| 6 - Listar clientes alocados`)
        console.log(`| 7 - Alocar cliente em uma acomodação`)
        console.log(`| 8 - Desalocar cliente de uma acomodação`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------`)
        console.log("");
    }
}