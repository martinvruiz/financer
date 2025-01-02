import { MonthSelector } from "../components/MonthSelector/MonthSelector";
import { TransactionForm } from "../components/TransactionForm/TransactionForm";
import { TransactionList } from "../components/TransactionList/TransactionList";
import { TotalTransactions } from "../components/TotalTransactions/TotalTransactions";
import { useState } from "react";
import { useTransationContext } from "../context/TransactionContext";

export const Noter = () => {
  const { transactions } = useTransationContext();

  const [selectedDate, setSelectedDate] = useState("");

  return (
    <>
      <p className="my-4 w-3/4 text-white text-xl text-center">
        Te ayudamos a manejar tus finanzas, introducí en el formulario el tipo
        de ingreso o gasto
      </p>
      <TransactionForm />
      <h2 className="mt-2 py-1 text-white text-2xl font-bold">
        Lista de Ingresos/Gastos
      </h2>
      {transactions.length === 0 ? (
        <p className="p-2 my-2 text-xl">No hay datos para mostrar!</p>
      ) : (
        <div className="w-full flex flex-col items-center">
          <MonthSelector setSelectedDate={setSelectedDate} />
          <TotalTransactions selectedDate={selectedDate} />
          <TransactionList selectedDate={selectedDate} />
        </div>
      )}
    </>
  );
};
