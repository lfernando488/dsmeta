import logo from '../../assets/img/Logo.svg';
import '../Header/styles.css';

function Header(){
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="Logo dsmeta" />
            <h1>DSMeta</h1>
            <p> Desenvolvido por
                <a href="https://github.com/lfernando488">
                    lfernando488
                </a>
            </p>
        </div>
    </header>
    )
}

export default Header;