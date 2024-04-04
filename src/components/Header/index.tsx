import Link from "next/link"
import styles from "@/components/Header/styles.module.css"

const Header = () => {
  return (
    <div className={styles.topBar}>
      <Link href="/">
        <span className={styles.nameLogo}>MedSchedule</span>
      </Link>
      <div className={styles.topBarButtons}>
        <Link href="/doctors" className={styles.buttonBar}>
          Médicos
        </Link>
        <Link href="/patients" className={styles.buttonBar}>
          Pacientes
        </Link>
        <Link href="/appointments" className={styles.buttonBar}>
          Consultas
        </Link>
      </div>
    </div>
  )
}

export default Header
