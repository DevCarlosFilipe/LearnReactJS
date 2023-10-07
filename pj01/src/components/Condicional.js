import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(event) {
        event.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu email: </h2>
            <form>
                <input
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Digite seu email..."
                />
                <button onClick={enviarEmail}>Enviar email</button>
            </form>
            {userEmail && (
                <div>
                    <p>O email do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}
        </div>
    );
}

export default Condicional;
