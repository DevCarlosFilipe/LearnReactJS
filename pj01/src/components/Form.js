function Form() {

    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log('Cadastrou o usuário!')
    }

    return (
        <div>
            <h1>Meu Cadastro: </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;