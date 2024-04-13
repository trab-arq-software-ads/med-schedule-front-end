"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Trash, Pencil } from "lucide-react"
import { Button } from "./button"

export interface DoctorProps {
  id: number
  name: string
  specialization: string
}

export const HoverEffect = ({
  items,
  className
}: {
  items: DoctorProps[]
  className?: string
  onDeleteDoctor?: (doctorId: number) => void
  onEditDoctor?: (doctorID: number) => void
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMutating, setIsMutating] = useState(false)
  const router = useRouter()

  async function handleDeleteDoctor(doctorId: number) {
    setIsMutating(true)

    await fetch(`http://localhost:3001/doctors/${doctorId}`, {
      method: "DELETE"
    })

    setIsMutating(false)

    window.alert("Doctor deleted successfully")
    router.refresh()
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2",
        className
      )}
    >
      {items.map((doctor, idx) => (
        <div key={doctor.id}>
          <div
            className="relative group block p-2 h-full  "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-cyan-700 dark:bg-slate-60000 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 15,
                    transition: { duration: 0.1 }
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.3, delay: 0.2 }
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{doctor.name}</CardTitle>
              <CardDescription>{doctor.specialization}</CardDescription>
              <CardActions>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDeleteDoctor(doctor.id)}
                >
                  <Trash />
                </Button>
                <Button variant="secondary" size="icon">
                  <Pencil />
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 bg-black/80 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  )
}

export const CardDescription = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  )
}
export const CardActions = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm flex gap-2",
        className
      )}
    >
      {children}
    </p>
  )
}