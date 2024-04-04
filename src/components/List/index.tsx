"use client"
import { useState } from "react"
import styles from "@/components/List/styles.module.css"

import { GoTrash } from "react-icons/go"
import { MdOutlineModeEditOutline } from "react-icons/md"
import { FaRegEye } from "react-icons/fa6"

export default function ListDoctors() {
  const doctors = [
    { id: "1", name: "Davy Eduardo Costa Dantas", specialization: "Pediatra" }
  ]

  return (
    <div className={styles.elementsList}>
      <h2>Lista de Médicos</h2>
      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <span className={styles.idElement}>{doctor.id}</span>
          <span>{doctor.name}</span>

          <div className={styles.options}>
            <a href="" id="trash">
              <GoTrash />
            </a>
            <a href="" id="edit">
              <MdOutlineModeEditOutline />
            </a>
            <a href="" id="view">
              <FaRegEye />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
