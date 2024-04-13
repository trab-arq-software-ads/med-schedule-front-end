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

type PropsTypes = {
    id: number 
}

export function AppointmentEditForm(props: PropsTypes) {

      

    const [doctors, setDoctors] = useState<DoctorProps[]>([])
    const [patients, setPatients] = useState<PatientProps[]>([])
    const [doctor_id, setDoctorId] = useState("")
    const [patient_id, setPatientId] = useState("")
    const [date, setDate] = useState("")
    const [symptoms, setSymptoms] = useState("")
    const [diagnosis, setDiagnosis] = useState("")
    const [isMutating, setIsMutating] = useState(false)

    const router = useRouter()

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/appointments")
            if (!response.ok) {
                throw new Error("Failed to fetch doctors")
            }
            const data = await response.json()
            const app = data.find(app => app.id == props.id)
            setDoctorId(app.doctor_id)
            setPatientId(app.patient_id)
            setSymptoms(app.symptoms)
            setDiagnosis(app.diagnosis)
            setDate(app.date)
        } catch (error) {
            console.error("Error fetching doctors:", error)
        }
    }

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

    const formatDate = (dateObject: Date) => {
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1 and pad with zero if needed
        const day = String(dateObject.getDate()).padStart(2, '0');
        const hours = String(dateObject.getHours()).padStart(2, '0');
        const minutes = String(dateObject.getMinutes()).padStart(2, '0');
        const seconds = String(dateObject.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
    }

    useEffect(() => {
        fetchDoctors()
        fetchPatients()
        fetchData()
    }, [])

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        setIsMutating(true)
        console.log(date)
        await fetch(`http://localhost:3001/appointments/${props.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ doctor_id, patient_id, date, symptoms, diagnosis })
        })
        setPatientId("")
        setDoctorId("")
        setDate("")
        setSymptoms("")
        setDiagnosis("")
        router.push("http://localhost:3000/appointments")
    }
    function handleChange() {
        window.alert("Appointment created successfully")
    }

    return (
        <div className="h-[600px] w-[450px] flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold text-cyan-700">Edit Appointment</h1>
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center text-black w-full space-y-4 mt-4 py-4"
            >
            <select value={doctor_id} onChange={(e) => setDoctorId(e.target.value)} className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16">
                <option value="">Select a Doctor</option>
                {doctors.map( d => (
                <option key={d.name} value={d.id}>
                    {d.name}
                </option>
                ))}
            </select>
            <select value={patient_id} onChange={(e) => setPatientId(e.target.value)} className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16">
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
                value={formatDate(new Date(date))}
                className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16"
            />
            <Input
                type="text"
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Symptons"
                value={symptoms}
                className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16"
            />
            <Input
                type="text"
                onChange={(e) => setDiagnosis(e.target.value)}
                placeholder="Diagnosis"
                value={diagnosis}
                className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16"
            />
            <Button
            type="submit"
            onClick={handleChange}
            variant="default"
            className="bg-cyan-700 text-white p-2 rounded-md w-56 h-14"
            >
            {isMutating ? "Updating..." : "Update"}
            </Button>
        </form>
        </div>
    )
}
