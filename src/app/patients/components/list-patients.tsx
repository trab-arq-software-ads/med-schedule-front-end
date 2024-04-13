"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Dropdown } from "./dropdown"
interface PatientProps {
  id: number
  name: string
  email: string
  phone: string
}

const ListPatients = () => {
  const [patients, setPatients] = useState<PatientProps[]>([])
  const [isMutating, setIsMutating] = useState(false)

  const router = useRouter()

  useEffect(() => {
    fetch("http://localhost:3001/patients")
      .then((response) => response.json())
      .then((data) => setPatients(data))
  }, [])

  async function handleDeletePatient(patientId: number) {
    setIsMutating(true)

    await fetch(`http://localhost:3001/patients/${patientId}`, {
      method: "DELETE"
    })

    setIsMutating(false)

    router.refresh()
    window.alert("Patient deleted successfully")
  }

  const handleEditPatient = (id: number) => {
    goToEditPage(id)
  }

  const goToEditPage = (id: number) => {
    router.push(`http://localhost:3000/patients/${id}`)
  }
  const onHistory = (id: number) => {
    router.push(`http://localhost:3000/patients/history/${id}`)
  }

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex justify-between">
        <h2 className="text-2xl text-white font-bold mb-4">List of patients</h2>
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
              <td>
                <Dropdown
                  onDelete={() => handleDeletePatient(patient.id)}
                  onEdit={() => handleEditPatient(patient.id)}
                  onHistory={() => onHistory(patient.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListPatients
