import styles from "@/components/Card/styles.module.css"
import Delete from '../../app/doctors/components/delete-doctor-modal'
import Update from '../../app/doctors/components/update-doctor-modal'
import { GoTrash } from "react-icons/go"
import { MdOutlineModeEditOutline } from "react-icons/md"
import { FaRegEye } from "react-icons/fa6"
import { useState } from "react"
import Link from "next/link"

interface CardProps {
  id: number
  name: string
  specialization: string
  func: () => void
}


const Card = ({ id, name, specialization, func }: CardProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  
  return (
    <div className={styles.elementsList}>

      <span className={styles.idElement}>{id}</span>
      <div className={styles.info}>
        <span>{name}</span>
        <span>{specialization}</span>
      </div>
        
      <div className={styles.options}>
          <button onClick={async () => setShowDeleteModal(true)} id={styles.trash}>
            <GoTrash />
          </button>
          <Delete refreshList={func} onRequestClose={() => setShowDeleteModal(false)} doctor={{ id, name, specialization }} isOpen={showDeleteModal}  />

          <button onClick={async () => setShowUpdateModal(true)}  id={styles.edit}>
            <MdOutlineModeEditOutline />
          <Update refreshList={func} onRequestClose={() => setShowUpdateModal(false)} doctor={{ id, name, specialization }} isOpen={showUpdateModal}  />
          
          </button>
          <button  id={styles.view}>
            <FaRegEye />
          </button>
      </div>
      
    </div>
  )
}

export default Card
