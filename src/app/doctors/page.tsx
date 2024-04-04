import Image from "next/image";
import Card from "../../components/Card";
import BackgroundImageDoctors from '../../../public/background.jpg';
import styles from "../doctors/style.module.css";

export default function Home() {
  const doctors = [
    { id: 1, name: "Davy Eduardo Costa Dantas", specialization: "Pediatra" },
    { id: 2, name: "Damião Teodósio", specialization: "Cirurgião Geral" }
  ]

  return (
    <main>
      <div className={styles.imgContainer}>
        <Image 
          src={BackgroundImageDoctors}
          alt="Image de fundo do app"
          priority
          fill
          objectPosition="top"
          objectFit="cover"
        />
        <div className={styles.listContainer}>
          <h1>Lista de Médicos</h1>
          <div className={styles.list}>
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
      </div>
    </main>
  )
}
