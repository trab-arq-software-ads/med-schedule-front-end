"use client"

import { SyntheticEvent, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PatientProps } from "@/app/appointments/components/create-appointment"


type PropsType = {
    id: number
}

export function PatientEditForm(props: PropsType) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isMutating, setIsMutating] = useState(false)

    const router = useRouter()

    const fetchPatient = async () => {
        try {
            const response = await fetch(`http://localhost:3001/patients/${props.id}`)
            if (!response.ok) {
                throw new Error("Failed to fetch doctors")
            }
            const data = await response.json()
            setName(data.patients.name)
            setEmail(data.patients.email)
            setPhone(data.patients.phone)
        } catch (error) {
            console.error("Error fetching doctors:", error)
        }
    }

    useEffect(() => {
        fetchPatient();
    }, [])
    

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        setIsMutating(true)

        await fetch(`http://localhost:3001/patients/${props.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, phone })
        })
        setName("")
        setEmail("")
        setPhone("")
        router.push('http://localhost:3000/patients')
    }
    function handleChange() {
        window.alert("Patient created successfully")
    }

    return (
        <div className="h-[600px] w-[450px] flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold text-cyan-700">Edit Patient</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center text-black w-full space-y-4 mt-4 py-4"
            >
                <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16"
                />
                <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border border-gray-300 text-md font-bold p-2 rounded-md w-full h-16"
                />
                <Input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="border border-gray-300 text-md font-bold p-2 rounded-md w-full h-16"
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
