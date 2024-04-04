import Image from "next/image"
import ListDoctors from "../../components/List"
import styles from "../doctors/style.module.css"
import Header from "@/components/Header"

export default function Home() {
  return (
    <main>
      <Header />

      <img
        className={styles.imgMain}
        src="/background.jpg"
        alt="Background Image"
      ></img>

      <div className="content">
        <ListDoctors />
      </div>
    </main>
  )
}
