import { useState } from "react";

function Form() {
    function cadastrarUsuario(event) {
        event.preventDefault();
        console.log(name);
        console.log(password);
        console.log("Cadastrou o usuário!");
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu Cadastro: </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
