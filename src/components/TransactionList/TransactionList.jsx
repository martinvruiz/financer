import { useTransationContext } from "../../context/TransactionContext"
import { format, parseISO } from "date-fns"
import { es } from "date-fns/locale" 


export const TransactionList = ({ selectedDate })=>{
    const {transactions, deleteTransaction} = useTransationContext()

    const formatDate = (dateString) => {
        const parsedDate = parseISO(dateString);
        return format(parsedDate, "dd/MM", { locale: es });

    };

    const formatCategory = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
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

        <ul className="lg:w-3/5 w-11/12 bg-white rounded-lg shadow-md p-4">
            {
                sortedTrans.map((transaction)=>
                    <li 
                        className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow" 
                        key={transaction.id}>
                            <p 
                                className="text-sm md:text-base">
                                    {formatDate(transaction.date)}
                            </p>
                            <p 
                                className="w-1/4 text-sm md:text-base text-indigo-600 font-medium">
                                    {formatCategory(transaction.category)}
                            </p>
                            <p 
                                className="w-1/4 text-xs md:text-base">
                                    {transaction.spend}
                            </p>
                            <p 
                                className={`w-1/4 text-center font-semibold text-xs md:text-base ${ transaction.type === "ingreso" ? "text-green-500": "text-red-500"}`}>
                                    $ {transaction.money}
                            </p>
                            <button 
                                onClick={()=>deleteTransaction(transaction.id)} 
                                className="p-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition-colors">
                                    Eliminar
                            </button>
                    </li>
                )
            }
        </ul>
    
    </>
}