import { useTransationContext } from "../../context/TransactionContext"
import { format, parseISO } from "date-fns"
import { es } from "date-fns/locale" 
import { toast } from "react-toastify"


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

    const handleDelete = ( id, spend, money )=>{
        toast.warning(
            <div className='text-black h-full text-center'>
                <span>
                    <p>
                        ¿Desea eliminar el registro?
                    </p>
                    <p>{spend}, ${money}</p>
                </span>
                <div>
                    <button
                    onClick={() => {
                    deleteTransaction(id);
                    toast.dismiss()
                    toast.warning("Trasaccion Eliminada")
                    }}
                    className=' bg-black text-white rounded-md my-2 mx-6 px-2'
                    >
                        Sí
                    </button>
                    <button
                    onClick={() => toast.dismiss()}
                    className=' bg-black text-white rounded-md my-2 mx-6 px-2'
                    >
                        No
                    </button>
                </div>
            </div>,
            {
                closeButton: false,
            }
        );
    }


    return <>

        <ul className="lg:w-3/5 w-11/12 text-center bg-white rounded-lg shadow-md mb-4 p-4">
            {
                sortedTrans.map((transaction)=>
                    <li 
                        className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow" 
                        key={transaction.id}>
                            <p 
                                className="text-xs md:text-base">
                                    {formatDate(transaction.date)}
                            </p>
                            <p 
                                className={`w-1/4 text-xs md:text-base font-medium ${transaction.type === "ingreso" ? "text-green-500" : "text-red-500"}`}>
                                    {formatCategory(transaction.category)}
                            </p>
                            <p 
                                className="w-1/4 text-xs md:text-base">
                                    {transaction.spend}
                            </p>
                            <p 
                                className={`w-1/4 text-center font-semibold text-md md:text-base}`}>
                                    $ {transaction.money}
                            </p>
                            <button 
                                onClick={()=>handleDelete(transaction.id, transaction.spend, transaction.money)} 
                                className="p-2 bg-red-500 text-white text-xs md:text-base rounded-md shadow hover:bg-red-600 transition-colors">
                                    Eliminar
                            </button>
                    </li>
                )
            }
        </ul>
    
    </>
}