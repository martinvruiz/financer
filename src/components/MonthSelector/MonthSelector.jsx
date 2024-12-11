import { useState, useEffect } from "react"
import { useTransationContext } from "../../context/TransactionContext";
import { format } from "date-fns"
import { es } from "date-fns/locale"



export const MonthSelector = ({setSelectedDate})=>{

    const { transactions } = useTransationContext();
    const [month, setMonth] = useState([])

    useEffect(() => {
        const uniqueDates = transactions.reduce((acc, transaction) => {
            const date = new Date(transaction.date);
            const monthYear = format(date, "MMMM yyyy", { locale: es });    
            if (!acc.includes(monthYear)) acc.push(monthYear);
                return acc;
        }, []);
        setMonth(uniqueDates);
        }, [transactions]);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const formatMonth = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return <>

    <select 
        className="p-3 my-2 border border-indigo-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 w-3/4 md:w-1/2 hover:shadow-md transition-shadow text-center" 
        onChange={handleDateChange}>
            <option value="">Todos los meses</option>
                {month.map((date, index) => (
            <option key={index} value={date}>
                {formatMonth(date)}
            </option>
        ))}
    </select>
    
    
    </>
}
