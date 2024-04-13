"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import Link from "next/link"
import { PatientProps } from "../../../../appointments/components/create-appointment"
import { DoctorProps } from "../../../../appointments/components/create-appointment"
import { Button } from "@/components/ui/button"
import { Dropdown } from "../../../../../components/Dropdown/index"
interface AppointmentsProps {
  id: number,
  doctor_id: number,
  patient_id: number,
  date: string,
  symptoms: string,
  diagnosis: string,
}
type propsType = {
  id: number
}

const ListAppointments = (props: propsType) => {
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([])
  const [doctors, setDoctors] = useState<PatientProps[]>([])
  const [patients, setPatients] = useState<PatientProps[]>([])
  const [isMutating, setIsMutating] = useState(false)

  const router = useRouter()

  const fetchDoctors = async () => {
    try {
    const response = await fetch("http://localhost:3001/doctors")
    if (!response.ok) {
        throw new Error("Failed to fetch doctors")
    }
    const data = await response.json()
    setDoctors(data)
    } catch (error) {
    console.error("Error fetching doctors:", error)
    }
  }
  const fetchPatients = async () => {
      try {
      const response = await fetch("http://localhost:3001/patients")
      if (!response.ok) {
          throw new Error("Failed to fetch patients")
      }
      const data = await response.json()
      setPatients(data)
      } catch (error) {
      console.error("Error fetching patients:", error)
      }
  }
  useEffect(() => {
    fetchDoctors()
    fetchPatients()
    fetch(`http://localhost:3001/appointments/${props.id}`)
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
              <td className="px-6 py-4 whitespace-nowrap">{doctors.find(d => d.id == a.doctor_id)?.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patients.find(d => d.id == a.patient_id)?.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(a.date).toLocaleString('pt-br')}</td>
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
