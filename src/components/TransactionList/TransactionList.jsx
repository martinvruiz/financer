import { useTransationContext } from "../../context/TransactionContext"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"


export const TransactionList = ()=>{
    const {transactions, deleteTransaction} = useTransationContext()
    const [sortOrder, setSortOrder] = useState("desc");

    const formatDate = (date)=>{
        const formattedDate =  format(new Date(date), "dd MMMM yyyy", {locale: es})

        return formattedDate.replace(/([a-záéíóúñ])/, (match) => match.toUpperCase());
    }


    const sortedTransactions = transactions.slice().sort((a, b) => {
        return sortOrder === "desc"
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date);
    });


    return <>

        <h2 className="my-2 py-1 text-2xl">Lista de Ingresos/Gastos</h2>

        <button onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")} className="p-2 my-1 mb-2 bg-blue-600 text-white">Cambiar orden</button>

        <ul className="w-3/4 flex flex-col text-center justify-center border-2 p-1  my-2 border-blue-600">
            {
                sortedTransactions.map((transaction)=>
                    <li className="flex justify-center w-full p-1" key={transaction.id}>
                        <p className="w-1/4">{formatDate(transaction.date)}</p>
                        <p className="w-1/4">{transaction.spend}</p>
                        <p className={`w-1/4 ${ transaction.type === "ingreso" ? "text-green-500": "text-red-500"}`}>$ {transaction.money}</p>
                        <button onClick={()=>deleteTransaction(transaction.id)} className="p-1 bg-red-500 text-white text-sm">Eliminar</button>
                    </li>
                )
            }
        </ul>
    
    </>
}