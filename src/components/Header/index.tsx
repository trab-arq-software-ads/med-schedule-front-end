import styles from "@/components/Header/styles.module.css"

const Header = () => {
  return (
    <div className={styles.topBar}>
        <span className={styles.nameLogo}>onCLÍNICA</span>
        <div className={styles.topBarButtons}>
          <a href="" className={styles.buttonBar}>Médicos</a>
          <a href="" className={styles.buttonBar}>Consultas</a>
          <a href="" className={styles.buttonBar}>Pacientes</a>
        </div>
      </div>
  )
}

export default Header;