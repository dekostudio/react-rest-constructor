import { ReactNode } from "react"
import { Outlet } from 'react-router-dom'

import cn from "classnames";
import styles from "./Layout.module.css"

type Props = {
  headerSlot?: ReactNode,
  footerSlot?: ReactNode
}

export function Layout(props: Props) {
  const {
    headerSlot,
    footerSlot
  } = props;
  
  return (
    <div className={cn(styles.layout, styles.container)}>
      { headerSlot }
      <div className={styles.container}>
        <Outlet />
      </div>
      { footerSlot }
    </div>
  )
}