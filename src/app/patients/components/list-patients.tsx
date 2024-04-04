import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default async function ListPatients() {
    const response = await fetch('https://api.github.com/users/whohenrique')
    const user = await response.json()

    return (
        <Table className="bg-blue-200">
            <TableHeader className="bg-blue-400">
                <TableRow>
                    <TableHead className="text-black font-semibold">ID</TableHead>
                    <TableHead className="text-black font-semibold">Nome Paciente</TableHead>
                    <TableHead className="text-black font-semibold">Email</TableHead>
                    <TableHead className="text-black font-semibold">Telefone</TableHead>
                    <TableHead className="text-black font-semibold">Data de Nascimento</TableHead>
                    <TableHead className="text-black font-semibold">
                        <Link href="/patients/register">Criar Paciente</Link>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        
                    </TableRow>
            </TableBody>
        </Table>
    );
}
