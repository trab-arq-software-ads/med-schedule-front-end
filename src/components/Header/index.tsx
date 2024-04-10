import Link from "next/link"
import clsx from 'clsx';
import styles from "@/components/Header/styles.module.css"

const Header = () => {
  return (
    <div className={clsx("bg-slate-950", styles.topBar)}>
      <Link href="/">
        <span className={styles.nameLogo}>MedSchedule</span>
      </Link>
      <div className={styles.topBarButtons}>
        <Link href="/doctors" className={styles.buttonBar}>
          Doctors
        </Link>
        <Link href="/patients" className={styles.buttonBar}>
          Patients
        </Link>
        <Link href="/appointments" className={styles.buttonBar}>
          Appointments
        </Link>
      </div>
    </div>
  )
}

export default Header
