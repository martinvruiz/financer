import { useTransationContext } from "../../context/TransactionContext"


export const TotalTransactions = ({selectedDate})=>{

    const { transactions, calculateTotalDifference } = useTransationContext()

    const total = calculateTotalDifference(transactions, selectedDate)

    return <>

        <div>
        <h2>
            Total del mes:{" "}
            <span style={{ color: total >= 0 ? "green" : "red" }}>
            ${total}
            </span>
        </h2>
            
        </div>
    
    </>
}