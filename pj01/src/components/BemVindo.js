function BemVindo({ nome }) {
    function gerarBemVindo(oNome) {
        return `Olá, ${oNome}, tudo bem?`;
    }

    return (
        <>
            {nome && <p>{gerarBemVindo(nome)}</p>}
        </>
    );
}

export default BemVindo;
