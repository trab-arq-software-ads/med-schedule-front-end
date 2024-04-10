import styles from "@/components/Card/styles.module.css"

import { GoTrash } from "react-icons/go"
import { MdOutlineModeEditOutline } from "react-icons/md"
import { FaRegEye } from "react-icons/fa6"

interface CardProps {
  id: number
  name: string
  specialization: string
}

const Card = ({ id, name, specialization }: CardProps) => {
  return (
    <div className={styles.elementsList}>
      <div>
        <span className={styles.idElement}>{id}</span>
        <span>{name}</span>
        <span>{specialization}</span>
      </div>

      <div className={styles.options}>
        <a href="" id={styles.trash}>
          <GoTrash />
        </a>
        <a href="" id={styles.edit}>
          <MdOutlineModeEditOutline />
        </a>
        <a href="" id={styles.view}>
          <FaRegEye />
        </a>
      </div>
    </div>
  )
}

export default Card
