"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { DoctorProps, HoverEffect } from "@/components/ui/card-hover-effect"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { Button } from "@/components/ui/button"

export default function Doctors() {


  const words = [
    { text: "Your", className: "text-white" },
    { text: "health", className: "text-white" },
    { text: "just a", className: "text-white" },
    { text: "click ", className: "text-white" },
    { text: "away.", className: "text-cyan-600 dark:text-cyan-500" }
  ]

  function handleChange() {
    window.alert("Doctor created successfully")
  }

  return (
    <main className="text-white min-h-screen min-w-full flex flex-col items-center justify-start mt-24">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl">
          Here you will find the main names in medicine!
        </h1>
        <TypewriterEffect className="text-white" words={words} />
      </div>
      <aside className="flex flex-col items-center justify-center mt-14">
        <div className="">
          <HoverEffect />
        </div>

        <div className="mt-6">
          <Link href="/doctors/register">
            <Button className="w-32 bg-cyan-700">New doctor</Button>
          </Link>
        </div>
      </aside>
    </main>
  )
}
