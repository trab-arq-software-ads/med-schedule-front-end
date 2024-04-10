import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
} from "@/components/ui/table";

export default async function ListPatients() {
    const response = await fetch('https://api.github.com/users/')
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
                </TableRow>
            </TableHeader>
            <TableBody>
                {Array.from({length: 10}).map((_, index) => { 
                    return (
                        <TableRow key={index}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.name}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    );
}
