"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Dropdown } from "../../../components/Dropdown"
interface AppointmentsProps {
  id: number,
  doctor_id: number,
  patient_id: number,
  date: string,
  symptoms: string,
  diagnosis: string,
}

const ListAppointments = () => {
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([])
  const [isMutating, setIsMutating] = useState(false)

  const router = useRouter()

  useEffect(() => {
    fetch("http://localhost:3001/appointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data))
  }, [])

  async function handleDeleteAppointment(appointmentsId: number) {
    setIsMutating(true)

    await fetch(`http://localhost:3001/appointments/${appointmentsId}`, {
      method: "DELETE"
    })

    setIsMutating(false)

    router.refresh()
    window.alert("Patient deleted successfully")
  }

  const handleEditPatient = (id: number) => {
    goToEditPage(id)
  }

  const goToEditPage = (id: number) => {}

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex justify-between">
        <h2 className="text-2xl text-white font-bold mb-4">List of Appointments</h2>
        <Link href="/appointments/register">
          <Button className="w-32 bg-cyan-700">New Appointment</Button>
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Doctor
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Patient
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Symptoms
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {appointments.map((a) => (
            <tr key={a.id} className="hover:bg-gray-100 cursor-pointer">
              <td className="px-6 py-4 whitespace-nowrap">{a.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{a.doctor_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{a.patient_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{a.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{a.symptoms}</td>
              <td>
                <Dropdown
                  onDelete={() => handleDeleteAppointment(a.id)}
                  onEdit={() => handleEditPatient(a.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListAppointments
