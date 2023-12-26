import { Link } from "react-router-dom";

import cn from "classnames"
import styles from "./Layout.module.css"

export function LayoutFooter() {
  return (
    <footer className={cn(styles.footer, "container")}>
      <nav className={styles.footer__nav}>
        <h1 className={styles.footer__logo}>
          rest-constructor
        </h1>

          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <Link className={styles.footer__link} to="/">
                discord
              </Link>
              <Link className={styles.footer__link} to="/">
                telegram
              </Link>
            </li>
          </ul>
      </nav>
    </footer>
  )
}