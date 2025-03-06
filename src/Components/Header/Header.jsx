import style from "./styles.module.scss";

function Header() {
  return (
    <header id="header" className={style.header}>
      <nav>
        <div className={style.logo}>
          <a href="index.html">BlooFit</a>
        </div>
        <ul>
          <li>
            <a href="index.html">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#catalogo">Catálogo</a>
          </li>
          <li>
            <a href="#duvidas">Dúvidas</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
