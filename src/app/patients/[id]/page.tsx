import Link from "next/link";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import { PatientEditForm } from "./edit-form";
export default function Home({params}:{params: {id: number}}) {
    
  return (
    <main className="flex flex-col justify-center items-center  min-w-full">
      <PatientEditForm id={params.id} />      
    </main>
  );
}