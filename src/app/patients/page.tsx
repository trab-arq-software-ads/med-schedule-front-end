import { Button } from "@/components/ui/button"
import ListPatients from "./components/list-patients"

import Link from "next/link"

export default function Patients() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <div className="flex justify-around items-center w-full mb-6">
        <h1 className="text-5xl text-white">List</h1>
        <Link href="/patients/register">
          <Button className="w-32 bg-cyan-700">New patient</Button>
        </Link>
      </div>
      <div className="flex justify-center items-center w-full max-w-screen-lg">
        <ListPatients />
      </div>
    </div>
  )
}
