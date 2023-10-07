import './App.css';

function App() {

    const name = 'Carlos Filipe'.toLocaleUpperCase()
    const url = "https://via.placeholder.com/150"

    function sum (a, b) {
        return a + b
    }

    return (
        <div className="App">
            <h2>Alterando o JSX</h2>
            <p>Olá, {name}</p>
            <p>Soma: {sum(2, 3)}</p>
            <img src={url} alt="Minha imagem" />
        </div>
    );
}

export default App;
