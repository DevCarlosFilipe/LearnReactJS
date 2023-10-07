import './App.css';
import RendLista from './components/RendLista';

function App() {

    const meusItens = ['React', 'PHP', 'WordPress']

    return (
        <div className="App">
            <h1>Renderização de listas</h1>
            <RendLista itens={meusItens} />
            <RendLista itens={[]} />
        </div>
    );
}

export default App;
