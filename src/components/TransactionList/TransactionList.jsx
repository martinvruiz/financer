import { useTransationContext } from "../../context/TransactionContext"
import { format } from "date-fns"
import { es } from "date-fns/locale"    


export const TransactionList = ({ selectedDate })=>{
    const {transactions, deleteTransaction} = useTransationContext()

    const formatDate = (date)=>{
        return format(new Date(date), "dd MMMM", {locale: es})
    }

    const filteredTransactions = selectedDate
    ? transactions.filter((transaction) => {
        const date = new Date(transaction.date);
        const monthYear = format(date, "MMMM yyyy", { locale: es });
        return monthYear === selectedDate;
        })
    : transactions;

    const sortedTrans = [...filteredTransactions].sort((a,b)=>{
        return new Date(a.date).getTime() - new Date(b.date).getTime()
    })


    return <>

        <ul className="w-3/4 flex flex-col text-center justify-center border-2 p-1  my-2 border-blue-600">
            {
                sortedTrans.map((transaction)=>
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