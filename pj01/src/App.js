import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
    const nome = "Juliana"
    return (
        <div className="App">
            <SayMyName nome="Carlos Filipe" />
            <SayMyName nome="Eduardo" />
            <SayMyName nome={nome} />
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
