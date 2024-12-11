import { useState, } from "react"
import { useTransationContext } from "../../context/TransactionContext"

export const TransactionForm = ()=>{

const {addTransaction, calculateTotalSavings} = useTransationContext()

const [formData, setFormData] = useState({
    type: "ingreso",
    spend: "",
    money: "",
    date: "",
    category: "varios",
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

    if (formData.type === "gasto" && formData.category === "ahorro") {
        const totalSavings = calculateTotalSavings();
        if (formData.money > totalSavings) {
            alert("No puedes descontar más de lo que tienes ahorrado.");
            return;
        }
    }

    const newTransaction = {...formData, id: Date.now()}
    addTransaction(newTransaction)

    setFormData({ type: "ingreso", spend: "", money: "", date: "", category: "varios" });
}




    return <>
    
        <form 
            onSubmit={handleSubmit} 
            action="transaction" 
            className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                    className="p-3 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" 
                    maxLength="20" 
                    placeholder="Motivo" 
                    type="text" 
                    name="spend" 
                    id="spend" 
                    value={formData.spend} 
                    onChange={handleChange}/>
                <input 
                    className="p-3 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" 
                    placeholder="Monto" 
                    type="number" 
                    name="money" 
                    id="money" 
                    value={formData.money} 
                    onChange={handleChange}/>
                <input 
                    className="p-3 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500" 
                    type="date" 
                    name="date" 
                    id="date" 
                    onChange={handleChange} 
                    value={formData.date}/>
                <select 
                    className="p-3 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    name="type" 
                    id="type" 
                    value={formData.type} 
                    onChange={handleChange}>
                        <option value="ingreso">Ingreso</option>
                        <option value="gasto">Gasto</option>
                </select>
                { (formData.type === "gasto" ? (
                    <select 
                        className="p-3 border border-gray-300 rounded-lg w-full lg:w-auto focus:outline-none focus:ring-2 focus:ring-sky-500" 
                        name="category" 
                        id="category" 
                        value={formData.category} 
                        onChange={handleChange}>
                            <option value="varios">Varios</option>
                            <option value="ahorro">Ahorro</option>
                            <option value="alimentacion">Alimentación</option>
                            <option value="salud">Salud</option>
                            <option value="vivienda">Vivienda</option>
                            <option value="servicios">Servicios</option>
                            <option value="transporte">Transporte</option>
                            <option value="vestimenta">Vestimenta</option>
                            <option value="educacion">Educacion</option>
                            <option value="vacaciones">Vacaciones</option>
                            <option value="ocio">Ocio</option>
                            <option value="deudas">Deudas</option>
                    </select> ) : (
                    <select 
                        className="p-3 border border-gray-300 rounded-lg w-full lg:w-auto focus:outline-none focus:ring-2 focus:ring-sky-500" 
                        name="category" 
                        id="category" 
                        value={formData.category} 
                        onChange={handleChange}>
                            <option value="varios">Varios</option>
                            <option value="ahorro">Ahorro</option>
                            <option value="inversiones">Inversiones</option>
                            <option value="rendimientos">Rendimientos</option>
                            <option value="sueldo">Sueldo</option>
                            <option value="pension">Pension</option>
                            <option value="alquiler">Alquiler</option>
                            <option value="regalos">Regalos</option>
                    </select>
                    )
                )}
            </div>
            <button 
                className="w-full p-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition-colors" 
                type="submit">
                    Guardar
            </button>
        </form>
    
    </>
}