import Link from "next/link";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center  min-w-full">
      <LampDemo />      
    </main>
  );
}