import React, {useState} from "react";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Button from "@/app/components/Button";


const ContadorApp = () => {
    
    let [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    return(
        <div>
            <Breadcrumbs></Breadcrumbs>
            <h1>Contador usando useState</h1>

            <p>Contagem: {contador} </p>

            <button onClick={incrementar}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Incrementar</button>

            <button onClick={decrementar}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Decrementar</button>



        </div>
    )    
}

export default ContadorApp;