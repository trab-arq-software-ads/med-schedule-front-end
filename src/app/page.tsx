import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[600px] min-w-full">
      <h1 className="text-blue-500/80 font-semibold text-2xl">Bem-vindo ao MedSchedule</h1>
        <Drawer>
        <DrawerTrigger>
          <Button className="mt-4 w-32 hover:bg-blue-400">
            Iniciar
          </Button>
        </DrawerTrigger>
        <DrawerContent className="flex items-center justify-center">
          <DrawerHeader>
            <DrawerTitle>Sistema de agendamento de consultas médicas</DrawerTitle>
            <DrawerDescription>Click em continuar para solicitar uma consulta</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>
              <Link 
                href="/appointments"
              >
                Continuar
              </Link>
            </Button>
            <DrawerClose>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </main>
  );
}