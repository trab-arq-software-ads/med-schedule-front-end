"use client"

import { SyntheticEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DoctorProps } from "@/components/ui/card-hover-effect"

export function DoctorForm() {
  const [name, setName] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [isMutating, setIsMutating] = useState(false)

  const router = useRouter()

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    setIsMutating(true)

    await fetch("http://localhost:3001/doctors/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, specialization })
    })
    setName("")
    setSpecialization("")
    router.refresh()
  }
  function handleChange() {
    window.alert("Patient created successfully")
  }

  return (
    <div className="h-[600px] w-[450px] flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-cyan-700">Create Doctor</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-black w-full space-y-4 mt-4 py-4"
      >
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Doctor name"
          className="border border-gray-300 text-md font-bold text-md p-2 rounded-lg w-full h-16"
        />
        <Input
          type="text"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          placeholder="Specialization"
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
