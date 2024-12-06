import { TransactionForm } from "../components/TransactionForm/TransactionForm"
import { TransactionList } from "../components/TransactionList/TransactionList"



export const Home = ()=>{
    
    
    return <>
        <h1 className="my-2 p-2 text-4xl">Financer</h1>
        <p className="mb-2 w-3/4 text-center">Te ayudamos a manejar tus finanzas, introducí en el formulario el tipo de ingreso o gasto</p>
        <TransactionForm/>
        <TransactionList/>
    </>
}