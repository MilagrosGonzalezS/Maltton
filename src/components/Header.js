import styles from "../styles/Header.module.scss";
import { useState, React } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  function getNavClasses() {
    if (showMenu) {
      return styles.nav_open;
    }
    return "";
  }

  return (
    <div className={`${getNavClasses()} ${styles.header}`}>
      <button
        onClick={handleClick}
        className={styles.nav_toggle}
        aria-label="toggle navigation"
      >
        <span className={styles.hamburger}>
          <i className="ri-menu-line"></i>
        </span>
      </button>
      <h1 className={styles.title}>MÁLTTON</h1>
      <button
        className={styles.carrito}
        aria-label="ir al carrito"
        // onClick={}
      >
        <i className="ri-shopping-bag-fill"></i>
      </button>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}></a>
          </li>
          <li className={styles.nav__item}>
            <a href="#inicio" className={styles.nav__link}>
              Inicio
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#productos" className={styles.nav__link}>
              Productos
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#contacto" className={styles.nav__link}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.carritoItems}>{/* <h1>Tu carrito</h1> */}</div>
    </div>
  );
}

export default Header;
