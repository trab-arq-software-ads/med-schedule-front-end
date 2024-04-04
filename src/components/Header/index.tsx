import styles from "@/components/Header/styles.module.css"

const Header = () => {
  return (
    <div className={styles.topBar}>
      <span className={styles.nameLogo}>MedSchedule</span>
      <div className={styles.topBarButtons}>
        <a href="" className={styles.topBar}>
          Médicos
        </a>
        <a href="" className={styles.buttonBar}>
          Consultas
        </a>
        <a href="" className={styles.buttonBar}>
          Pacientes
        </a>
      </div>
    </div>
  )
}

export default Header;