import { useTransationContext } from "../../context/TransactionContext"


export const TotalTransactions = ({selectedDate})=>{

    const { transactions, calculateTotalDifference } = useTransationContext()

    const total = calculateTotalDifference(transactions, selectedDate)

    return <>

        <div className="bg-white rounded-lg shadow-md my-2 p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-700">
            Total del mes:{" "}
            <span className={`font-bold ${total >= 0 ? "text-green-500" : "text-red-500"}`}>
            ${total}
            </span>
        </h2>
            
        </div>
    
    </>
}