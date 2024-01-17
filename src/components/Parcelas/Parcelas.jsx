import './Parcelas.css'

//Context
import { useContext } from 'react';
import { EmprestimoContext } from '../../context/context';

import { CalcularValorParcela } from '../../js/CalcularValorParcela';

function Parcelas({quantidadeParcelas}) {

  const {valorEmprestimo, numeroDeParcelas, setNumeroDeParcelas} = useContext(EmprestimoContext)

  const lista = [...Array(quantidadeParcelas).keys()];

  

  function selecionarParcelamento(e){
    setNumeroDeParcelas(e)
  }
  
  return (
    <div className='Parcelas'>
        {
            lista.map((e) => (
                <div className={`parcela ${numeroDeParcelas - 1 == e ? "selecionada" : ""}`} key={e} id={e} onClick={() => {selecionarParcelamento(e+1)}}>
                    <div className='iconParcela'>
                        <div className='iconParcelaCirculo'></div>
                    </div>
                    <h3>{e + 1} {e+1 == 1 ? "Parcela" : "Parcelas"} de R${CalcularValorParcela(valorEmprestimo, e + 1)},00</h3>
                </div>
            ))
        }
    </div>
  )
}

export default Parcelas

