import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

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
        </div>
    );
}

export default App;
