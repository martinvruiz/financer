import { useTransationContext } from "../../context/TransactionContext"


export const TotalSavings = ({selectedDate})=>{

    const { calculateTotalSavings } = useTransationContext()

    const totalSavings = calculateTotalSavings()


    return <>

        <div className="bg-white rounded-lg shadow-md my-2 p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-700">
            Ahorro total:{" "}
            <span className="font-bold text-green-500">
            ${totalSavings}
            </span>
        </h2>
            
        </div>
    
    </>
}