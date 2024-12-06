import { useState, } from "react"
import { useTransationContext } from "../../context/TransactionContext"

export const TransactionForm = ()=>{

const {addTransaction} = useTransationContext()

const [formData, setFormData] = useState({
    type: "",
    spend: "",
    money: "",
    date: "",
    category: "",
})

const handleChange = (e)=>{

    const {name, value} = e.target

    setFormData({...formData, [name]: value})
}

const handleSubmit = (e)=>{

    e.preventDefault()

    if (!formData.spend || !formData.money || !formData.date) {
        alert("Por favor, complete todos los campos.");
        return;
    }


    const newTransaction = {...formData, id: Date.now()}
    addTransaction(newTransaction)

    setFormData({ type: "ingreso", spend: "", money: "", date: "", category: "varios" });
}




    return <>
    
        <form onSubmit={handleSubmit} action="transaction" className="text-sm text-center">
            <div>
                <input className="p-2 border-2 border-blue-600 m-2" maxLength="20" placeholder="Motivo" type="text" name="spend" id="spend" value={formData.spend} onChange={handleChange}/>
                <input className="p-2 border-2 border-blue-600 m-2" placeholder="Monto" type="number" name="money" id="money" value={formData.money} onChange={handleChange}/>
                <input className="p-2 border-2 border-blue-600 m-2" type="date" name="date" id="date" onChange={handleChange} value={formData.date}/>
                <select className="p-2 border-2 border-blue-600 m-2"  name="type" id="type" value={formData.type} onChange={handleChange}>
                    <option value="ingreso">Ingreso</option>
                    <option value="gasto">Gasto</option>
                </select>
                { (formData.type === "gasto" ? (
                    <select className="p-2 border-2 border-blue-600 m-2" name="category" id="category" value={formData.category} onChange={handleChange}>
                        <option value="varios">Varios</option>
                        <option value="alimentacion">Alimentación</option>
                        <option value="expensas">Expensas</option>
                        <option value="salud">Salud</option>
                        <option value="vivienda">Vivienda</option>
                        <option value="ocio">Ocio</option>
                        <option value="deudas">Deudas</option>
                    </select> ) : (
                    <select className="p-2 border-2 border-blue-600 m-2" name="category" id="category" value={formData.category} onChange={handleChange}>
                        <option value="varios">Varios</option>
                        <option value="sueldo">Sueldo</option>
                        <option value="alquiler">Alquiler</option>
                        <option value="regalos">Regalos</option>
                    </select>
                    )
                )}
            </div>
            <button className="p-2 m-2 bg-blue-600 text-white" type="submit">Guardar</button>
        </form>
    
    </>
}