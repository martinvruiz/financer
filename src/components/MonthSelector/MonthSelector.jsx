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
    
    return <>

    <select className="p-2 border-2 border-blue-600 m-2" onChange={handleDateChange}>
        <option value="">Todos los meses</option>
        {month.map((date, index) => (
        <option key={index} value={date}>
            {date}
        </option>
        ))}
    </select>
    
    
    </>
}
