"use client"

import { SyntheticEvent, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export interface PatientProps {
    id: number
    name: string
    email: string
    phone: string
}
export interface DoctorProps {
    id: number
    name: string
    specialization: string
}

export function AppointmentForm() {

      

    const [doctors, setDoctors] = useState<DoctorProps[]>([])
    const [patients, setPatients] = useState<PatientProps[]>([])
    const [doctor_id, setDoctor] = useState("")
    const [patient_id, setPatient] = useState("")
    const [date, setDate] = useState("")
    const [symptoms, setSymptoms] = useState("")
    const [diagnosis, setDiagnosis] = useState("")
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
    }, [])

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        setIsMutating(true)

        await fetch("http://localhost:3001/appointments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ doctor_id, patient_id, date, symptoms, diagnosis })
        })
        setDoctor("")
        setPatient("")
        setDate("")
        setSymptoms("")
        setDiagnosis("")
        router.refresh()
    }
    function handleChange() {
        window.alert("Appointment created successfully")
    }

    return (
        <div className="h-[600px] w-[450px] flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold text-cyan-700">Create Appointment</h1>
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center text-black w-full space-y-4 mt-4 py-4"
            >
            <select onChange={(e) => setDoctor(e.target.value)} className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16">
                <option value="">Select a Doctor</option>
                {doctors.map( d => (
                <option key={d.name} value={d.id}>
                    {d.name}
                </option>
                ))}
            </select>
            <select onChange={(e) => setPatient(e.target.value)} className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16">
                 <option value="">Select a Patient</option>
                {patients.map( p => (
                <option key={p.name} value={p.id}>
                    {p.name}
                </option>
                ))}
            </select>
            <Input
                type="datetime-local"
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
                className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16"
            />
            <Input
                type="text"
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Symptons"
                className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16"
            />
            <Input
                type="text"
                onChange={(e) => setDiagnosis(e.target.value)}
                placeholder="Diagnosis"
                className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16"
            />
            <Button
            type="submit"
            onClick={handleChange}
            variant="default"
            className="bg-cyan-700 text-white p-2 rounded-md w-56 h-14"
            >
            {isMutating ? "Creating..." : "Create"}
            </Button>
        </form>
        </div>
    )
}
