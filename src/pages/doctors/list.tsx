import styles from "../doctors/style.module.css"
import Header from "@/components/Header"
import Card from "../../components/Card"

export default function Home() {
  const doctors = [
    { id: 1, name: "Davy Eduardo Costa Dantas", specialization: "Pediatra" }
  ]

  return (
    <main>
      <Header />
      <div className={styles.imgContainer}>
        <img
          className={styles.imgMain}
          src="/background.jpg"
          alt="Background Image"
        ></img>
        <div className={styles.listContainer}>
          <h1>Lista de Médicos</h1>
          {doctors.map((doctor) => (
            <div className={styles.content} key={doctor.id}>
              <Card
                id={doctor.id}
                name={doctor.name}
                specialization={doctor.specialization}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
