import Link from "next/link";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import { AppointmentEditForm } from "./edit-form";
export default function Home({params}:{params: {id: number}}) {
    
  return (
    <main className="flex flex-col justify-center items-center  min-w-full">
        <AppointmentEditForm id={params.id}></AppointmentEditForm>
    </main>
  );
}