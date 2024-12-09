import { MonthSelector } from "../components/MonthSelector/MonthSelector";
import { TransactionForm } from "../components/TransactionForm/TransactionForm"
import { TransactionList } from "../components/TransactionList/TransactionList"
import { TotalTransactions } from "../components/TotalTransactions/TotalTransactions"
import { useState } from "react"




export const Home = ()=>{
    const [selectedDate, setSelectedDate] = useState("");
    
    return <>
        <h1 className="my-2 p-2 text-4xl">Financer</h1>
        <p className="mb-2 w-3/4 text-center">Te ayudamos a manejar tus finanzas, introducí en el formulario el tipo de ingreso o gasto</p>
        <TransactionForm/>
        <h2 className="my-2 py-1 text-2xl">Lista de Ingresos/Gastos</h2>
        <MonthSelector setSelectedDate={setSelectedDate}/>
        <TotalTransactions selectedDate={selectedDate}/>
        <TransactionList selectedDate={selectedDate}/>
    </>
}