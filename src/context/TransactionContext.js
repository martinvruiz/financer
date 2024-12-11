import { createContext, useContext, useState, useEffect } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";


const TransanctionContext = createContext()

export const useTransationContext = ()=> useContext(TransanctionContext)

export const TransactionProvider = ({ children })=>{

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
        if (Array.isArray(storedTransactions)) {
            const setMoney = storedTransactions.map((trans)=>({
                ...trans,
                money : Number(trans.money),
            }))
            setTransactions(setMoney);
        }
    }, []);

    const addTransaction = (transaction) => {
        const setMoney = {
            ...transaction,
            money : Number(transaction.money),
        }
        setTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions, setMoney];
            
            localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
            return updatedTransactions;
        });
    };

    const deleteTransaction = (id) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = prevTransactions.filter(
                (transaction) => transaction.id !== id
            );
            
            localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
            return updatedTransactions;
        });
    };

    const calculateTotalSavings = () => {
        const totalSavings = transactions
            .filter((transaction) => transaction.category === "ahorro")
            .reduce((total, transaction) => {
                if (transaction.type === "ingreso") {
                    total += parseFloat(transaction.money);
                } else if (transaction.type === "gasto") {
                    total -= parseFloat(transaction.money);
                }
                return total < 0 ? 0 : total;
            }, 0);
        return totalSavings;
    };

    const calculateTotalDifference = (transactions, selectedDate) => {
        const filteredTransactions = selectedDate
            ? transactions.filter((transaction) => {
                const date = new Date(transaction.date);
                const monthYear = format(date, "MMMM yyyy", { locale: es });
                return monthYear === selectedDate;
            })
                : transactions;
        const total = filteredTransactions.reduce(
            (acc, transaction) => {
                if (transaction.type === "ingreso") {
                    acc.ingresos += transaction.money;
                } else if (transaction.type === "gasto") {
                    acc.gastos += transaction.money;
                }
            return acc;
            },
                { ingresos: 0, gastos: 0 }
        );
        return total.ingresos - total.gastos;
    };


    return (
        <TransanctionContext.Provider
            value={{ transactions, addTransaction, deleteTransaction, calculateTotalDifference, calculateTotalSavings}}
        >
            {children}
        </TransanctionContext.Provider>
    );
    }