import { Link } from "react-router-dom";

import cn from "classnames"
import styles from './LayoutHeader.module.css'

export function LayoutHeader() {
  return (
    <header className={styles.header}>
      <nav className={cn(styles.nav, "container")}>
        <Link to="/" className={styles.nav__logo}>
          rest-constructor
        </Link>

        <div className={styles.nav__menu}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link to="/signin" className={cn(styles.nav__link, styles.active)}>Главная</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/signup" className={cn(styles.nav__link, styles.active)}>О нас</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/signup" className={cn(styles.nav__link, styles.active)}>Прайс-лист</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/signup" className={cn(styles.nav__link, styles.active)}>Документация</Link>
            </li>
          </ul>
        </div>

        <div className={styles.nav__menu}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link to="/signin" className={cn(styles.nav__link_signin)}>Авторизация</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/signup" className={cn(styles.nav__link_signup)}>Регистарция</Link>
            </li>
          </ul>
        </div>

      </nav>
  </header>
  );
}