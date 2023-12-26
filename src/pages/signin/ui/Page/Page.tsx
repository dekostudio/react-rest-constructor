import { SigninForm } from "@/features/authentication/signin";

import cn from "classnames"
import styles from "./Page.module.css"

export function Signin() {
  return (
    <div className={cn(styles.signin, "container")}>
      <h1 className={styles.page__title}>
          Авторизация
        </h1>
      <div className={cn(styles.signin__container, styles.grid)}>        
        <SigninForm />
      </div>
    </div>
  )
}