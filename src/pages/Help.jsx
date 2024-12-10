


export const Help = ()=>{


    return <>
    
    <div className="flex flex-col text-center w-4/5 mb-4 items-center">
        <h2 className="text-xl lg:text-3xl font-semibold my-2 p-2">
            Preguntas frecuentes
        </h2>
        <h4 className="w-3/4 p-2 text-center text-lg">
            Algunas son:
        </h4>
        <p className="p-2 my-2 font-medium">
            ¿Cómo agrego un gasto o un ingreso?
        </p>
        <p>
            En la pantalla inicio te aparecera el formulario para que agregues tu ingreso o gasto, es importante completar todos los campos para poder guardarlo
        </p>
        <p className="p-2 my-2 font-medium">
            ¿Cómo se guarda el gasto o ingreso?
        </p>
        <p>
            Abajo del formulario, el boton azul "Guardar".
        </p>
        <p className="p-2 my-2 font-medium">
            ¿Como se que no se perderan mis datos?
        </p>
        <p>
            Se guardan en los datos del navegador, es unico para cada usuario. Son intransferibles.
        </p>
        <p className="p-2 my-2 font-medium">
            ¿Hay un limite para guardar?
        </p>
        <p>
            No, no hay un limite. Cada usuario puede guardar la cantidad de datos que necesite.
        </p>
        <p className="p-2 my-2 font-medium">
            ¿Se pueden eliminar gastos o ingresos?
        </p>
        <p>
            Si, en cada gasto o ingreso aparece el boton de eliminar, este paso es irreversible.
        </p>
        <p className="p-2 my-2 font-medium">
            ¿Puedo ver los gastos de cada mes en particular?
        </p>
        <p>
            Si, por defecto aparece la opcion de ver todos los meses pero cada usuario puede ver lo que gasto por mes en la lista de Ingresos/Gastos
        </p>



    </div>
    
    </>
}