"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

interface DropdownProps {
  onDelete: () => void
  onEdit: () => void
}

export function Dropdown({ onDelete, onEdit }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-transparent text-black hover:bg-slate-400 hover:text-white"
          size="icon"
        >
          ...
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-600 hover:bg-red-600 hover:text-white"
          onClick={onDelete}
        >
          Delete
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-cyan-700 hover:bg-cyan-700 hover:text-white"
          onClick={onEdit}
        >
          Edit
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
