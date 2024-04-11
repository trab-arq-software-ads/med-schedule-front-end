"use client"

import { useState, useEffect } from "react"

interface PatientsProps {
  id: number
  name: string
  email: string
  phone: string | number
  birhtday: string
}

const ListPatients: React.FC = () => {
  const [patients, setPatients] = useState<PatientsProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/pacientes/")
        const data = await response.json()
        setPatients(data)
      } catch (error) {
        console.error("Erro ao buscar pacientes:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container mx-auto px-4 py-2">
      <h2 className="text-2xl font-bold mb-4">Lista de Pacientes</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nome
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Birthday
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {patients.map((patient) => (
            <tr key={patient.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{patient.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {patient.birhtday}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListPatients
