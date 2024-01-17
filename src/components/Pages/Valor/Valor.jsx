import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Valor.css'


//Context
import { useContext } from 'react'
import { EmprestimoContext } from '../../../context/context';

function Valor() {

  const {setValorEmprestimo, setNumeroDeParcelas} = useContext(EmprestimoContext)

  const navigate = useNavigate()

  const [pegarValor, setPegarValor] = useState(0)

  function clickButtomValor(e){
    e.preventDefault()
    if(pegarValor < 50){
      alert("Empréstimo mínimo de R$50")
    } else{
      navigate("/parcelas")
      setValorEmprestimo(pegarValor)
      setNumeroDeParcelas(0)
    }
  }

  return (
    <div className='Valor center pagesDesigner'>
        <h2>Quanto você deseja pegar emprestado?</h2>
        <form onSubmit={(e) => {clickButtomValor(e)}}>
            <input type="number" name='valor' placeholder='Valor (R$)' required onChange={(e) => setPegarValor(e.target.value)}/>
            <button className='buttonDesigner'>Simular parcelas</button>
        </form>
    </div>
  )
}

export default Valor