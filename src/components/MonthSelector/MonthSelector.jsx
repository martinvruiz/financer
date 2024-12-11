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
        className="p-2 border-2 border-sky-500 m-2" 
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
