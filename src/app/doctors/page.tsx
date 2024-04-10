"use client";
import Image from "next/image";
import Card from "../../components/Card";
import BackgroundImageDoctors from '../../../public/background.jpg';
import styles from "../doctors/style.module.css";
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import CreateDoctorModal from "./components/create-doctor-modal";

export default function Home() {
  const [doctors, setDoctors] = useState([])
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
      setShowModal(true);
    };

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        const response = await fetch('http://localhost:3002/medicos')
        console.log(response)
        const data = await response.json()
        setDoctors(data.doctors);
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
    loadDoctors()
  }, [])

  return (
    <main>
      <h2 id={styles.textImg}> <b>Sua saúde</b><br/>a um clique de distância</h2>
      <div className={styles.imgContainer}>
        <Image
          className={styles.imgMain}
          src={BackgroundImageDoctors}
          alt="Image de fundo do app"
          priority
          fill
          objectPosition="center top"
          objectFit="cover"
          />
        <div className={styles.listContainer}>
          <h1>Nossos Médicos</h1>

          <button onClick={handleDelete} className={styles.CreateDoctor_btn}>Adicionar Médico</button>
          <CreateDoctorModal isOpen={showModal} onRequestClose={() => setShowModal(false)} />

          <div className={styles.list}>
          {Array.isArray(doctors) && doctors.map((doctor: { id: number, name: string, specialization: string })=>(
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
