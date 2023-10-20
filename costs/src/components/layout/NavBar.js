import { Link } from "react-router-dom";

function NavBar() {
    return (
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/contact">Contato</Link>
            </li>
            <li>
                <Link to="/company">Empresa</Link>
            </li>
            <li>
                <Link to="/newproject">Novo Projeto</Link>
            </li>
        </ul>
    );
}

export default NavBar;