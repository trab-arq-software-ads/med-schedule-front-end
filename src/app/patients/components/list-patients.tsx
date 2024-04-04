import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
  

export function ListPatients() {
    return (
        <Table className="mt-6">
            <TableCaption>Lista de pacientes</TableCaption>
            <TableHeader>
                <Skeleton className="min-w-full rounded-xl" />
                <TableRow>
                    <TableHead className="w-[100px]">Nome Paciente</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}