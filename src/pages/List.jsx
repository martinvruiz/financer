import { useState } from "react";
import { MonthSelector } from "../components/MonthSelector/MonthSelector";
import { TotalTransactions } from "../components/TotalTransactions/TotalTransactions";
import { TransactionList } from "../components/TransactionList/TransactionList";
import { useTransationContext } from "../context/TransactionContext";

export const List = () => {
  const { transactions } = useTransationContext();

  const [selectedDate, setSelectedDate] = useState("");

  return (
    <>
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
