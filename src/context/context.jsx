import { createContext, useState, useEffect } from "react";

export const EmprestimoContext = createContext()

export const EmprestimoProvider = ({children}) => {

    const [valorEmprestimo, setValorEmprestimo] = useState(0)

    const [numeroDeParcelas, setNumeroDeParcelas] = useState(0)
 

    const value = {
        valorEmprestimo,
        setValorEmprestimo,

        numeroDeParcelas, 
        setNumeroDeParcelas
    }

    

    return(
        <EmprestimoContext.Provider value={value}>{children}</EmprestimoContext.Provider>
    )
}


