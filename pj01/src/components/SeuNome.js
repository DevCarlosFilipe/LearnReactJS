function SeuNome({ setNome }) {
    return (
        <div>
            <p>Digite o seu nome:</p>
            <input
                type="text"
                placeholder="Qual é seu nome?"
                onChange={(event) => setNome(event.target.value)}
            />
        </div>
    );
}

export default SeuNome;
