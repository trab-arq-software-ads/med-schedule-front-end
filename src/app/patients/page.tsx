import { Button } from "@/components/ui/button"
import ListPatients from "./components/list-patients"

import Link from "next/link"

export default function Patients() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <div className="flex justify-center items-center w-full max-w-screen-lg">
        <ListPatients />
      </div>
    </div>
  )
}
