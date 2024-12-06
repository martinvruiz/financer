import { createContext, useContext, useState, useEffect } from "react";


const TransanctionContext = createContext()

export const useTransationContext = ()=> useContext(TransanctionContext)

export const TransactionProvider = ({ children })=>{

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
        if (Array.isArray(storedTransactions)) {
            setTransactions(storedTransactions);
        }
    }, []);

    const addTransaction = (transaction) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions, transaction];
            
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


    return (
        <TransanctionContext.Provider
            value={{ transactions, addTransaction, deleteTransaction,}}
        >
            {children}
        </TransanctionContext.Provider>
    );
    }