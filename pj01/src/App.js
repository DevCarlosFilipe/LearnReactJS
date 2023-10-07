import './App.css';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
    const nome = "Juliana"
    return (
        <div className="App">
            <h1>Testando css</h1>
            <Frase />
            <Frase />
            <br />
            <br />
            <Pessoa
                nome={nome}
                idade="15"
                profissao="Programador"
                foto="//via.placeholder.com/150"
            />
            <br />
            <br />
            <List />
        </div>
    );
}

export default App;
