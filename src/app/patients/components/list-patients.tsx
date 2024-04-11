// ListPatients.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"
import { Dropdown } from '../../../components/Dropdown'


interface PatientsProps {
  id: number
  name: string
  email: string
  phone: string | number
  birhtday: string
}

const ListPatients = () => {
  const [patients, setPatients] = React.useState<PatientsProps[]>([
    {
      id: 1,
      name: "Henrique",
      email: "henrique@gmail.com",
      phone: "0878907890",
      birhtday: "15/12/2002"
    },
    {
      id: 2,
      name: "Henrique",
      email: "henrique@gmail.com",
      phone: "0878907890",
      birhtday: "15/12/2002"
    },
    {
      id: 3,
      name: "Henrique",
      email: "henrique@gmail.com",
      phone: "0878907890",
      birhtday: "15/12/2002"
    },
  ])

  const handleDeletePatient = (id: number) => {
    setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== id));
    console.log("Deletar paciente com o ID:", id);
  };

  const handleEditPatient = (id: number) => {
    goToEditPage(id);
  };

  const goToEditPage = (id: number) => {
    router.push(`/patients/edit/${id}`);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3002/pacientes/")
      const data = await response.json()
      setPatients(data)
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex justify-between">
        <h2 className="text-2xl text-white font-bold mb-4">Lista de Pacientes</h2>
        <Link href="/patients/register">
          <Button className="w-32 bg-cyan-700">New patient</Button>
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Nome
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Birthday
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {patients.map((patient) => (
            <tr key={patient.id} className="hover:bg-gray-100 cursor-pointer">
              <td className="px-6 py-4 whitespace-nowrap">{patient.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.birhtday}</td>
              <td>
                <Dropdown onDelete={() => handleDeletePatient(patient.id)} onEdit={() => handleEditPatient(patient.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListPatients
