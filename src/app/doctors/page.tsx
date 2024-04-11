"use client";

import { useState, useEffect } from "react"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import CreateDoctorModal from "./components/create-doctor-modal"
import { Button } from "@/components/ui/button";

interface DoctorProps {
  id: number;
  name: string;
  specialization: string;
}

export default function Doctors() {
  const [doctors, setDoctors] = useState<DoctorProps[]>([
    {
      id: 1,
      name: "Damião Filho",
      specialization: "Dentista"
    },
    {
      id: 2,
      name: "Lucas Oliveira",
      specialization: "Fisioterapeuta"
    },
    {
      id: 3,
      name: "Davy Dantas",
      specialization: "Odonto"
    },
  ])
  const [showModal, setShowModal] = useState(false)

  // useEffect(() => {
  //   const loadDoctors = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3002/medicos")
  //       console.log(response)
  //       const data = await response.json()
  //       setDoctors(data.doctors)
  //       console.log(data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   loadDoctors()
  // }, [])

  const words = [
    {
      text: "Your",
      className: "text-white",
    },
    {
      text: "health",
      className: "text-white",
    },
    {
      text: "just a",
      className: "text-white",
    },
    {
      text: "click ",
      className: "text-white",
    },
    {
      text: "away.",
      className: "text-cyan-600 dark:text-cyan-500",
    },
  ];

  const handleAddDoctor = () => {
    setShowModal(true);
  };

  return (
    <main className="text-white min-h-screen min-w-full flex flex-col items-center justify-start mt-24">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl">Here you will find the main names in medicine!</h1>
        <TypewriterEffect 
          className="text-white"
          words={words}
          />
      </div>
      <aside className="flex flex-col items-center justify-center mt-14 ">
        <div className="flex justify-center items-center">
          {Array.isArray(doctors) &&
            doctors.map((doctor) => (
              <HoverEffect 
                items={[doctor]}
                key={doctor.id}
              />
            ))}
        </div>

        <div className="mt-6">
          <Button
            variant="secondary"
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-900 hover:text-white"
            onClick={handleAddDoctor}
          >
            Add new doctor
          </Button>
        </div>
      </aside>
      <CreateDoctorModal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
        />
    </main>
  )
}
