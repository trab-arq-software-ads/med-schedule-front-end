'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,

} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const PatientFormSchema = z.object({
    username: z.string()
        .min(6,
        {
            message: "O nome deve conter no minimo 6 caracteres.",
        }
    ),
    email: z.string()
        .email(
        {
            message: "O email não é válido."
        }    
    ), 
    phone: z.string()
        .max(14,
          {
            message: "informe um número correto."
          }  
        )
    ,
    birthdate: z.string()

    ,
})

type PatientFormSchema = z.infer<typeof PatientFormSchema>

export function PatientForm() {
    const form = useForm<PatientFormSchema>({
        resolver: zodResolver(PatientFormSchema),
    })

    function onSubmit(values: PatientFormSchema) {
        console.log(values)
    }
    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-blue-400/80 w-96 space-y-4 p-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do paciente</FormLabel>
              <FormControl>
                <Input placeholder="Fulando de tal" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="exemplo@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input placeholder="(84) 99998-4125" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birthdate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de Nascimento</FormLabel>
              <FormControl>
                <Input type="date" placeholder="31/01/1999" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-blue-500 hover:bg-blue-400">Criar</Button>
      </form>
    </Form>
  )
}
