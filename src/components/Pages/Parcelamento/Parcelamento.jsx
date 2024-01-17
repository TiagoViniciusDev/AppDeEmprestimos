import './Parcelamento.css'
import Parcelas from '../../Parcelas/Parcelas';

//Context
import { useContext, useEffect } from 'react';
import { EmprestimoContext } from '../../../context/context';
import { CalcularValorParcela } from '../../../js/CalcularValorParcela';
import { useNavigate } from 'react-router-dom';

function Parcelamento() {

  const {valorEmprestimo, numeroDeParcelas} = useContext(EmprestimoContext)

  const navigate = useNavigate()

  useEffect(() => {
    if(valorEmprestimo == 0){
      navigate("/Matheus-Emprestimos")
    } 
  },[])

  //Mensagem Whatsapp
  // um número no formato internacional (ativo no WhatsApp)
  let number = '5586994229680'
  // o texto ou algo vindo de um <textarea> ou <input> por exemplo
  let msg = `Olá, gostaria de fazer um empréstimo de R$${valorEmprestimo},00 em ${numeroDeParcelas} ${numeroDeParcelas == 1 ? "parcela" : "parcelas"} de R$${CalcularValorParcela(valorEmprestimo,numeroDeParcelas)},00`

  // montar o link (apenas texto) (web)
  let target = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`

  // montar o link (número e texto) (web)
  target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(msg)}`

  // montar o link (texto) (app)
  let targetApp = `whatsapp://send?text=${encodeURIComponent(msg)}`

  // montar o link (número e texto) (app)
  targetApp = `whatsapp://send?text=${encodeURIComponent(msg)}`

  function pedirEmprestimoValidacao(){
    if(numeroDeParcelas == 0){
      alert("Selecione em quantas parcelas você quer pagar o empréstimo")
    }
  }

  return (
    <div className='Parcelamento center pagesDesigner'>
        <header>
            <h2>Empréstimo de <span>R${valorEmprestimo}</span></h2>
            <p>*Os juros são de <span>20% ao mês</span></p>
            <p>*Você paga a primeira parcela daqui a um mês</p>
        </header>
        <div className='parcelasContainer'>
          <Parcelas quantidadeParcelas={12}/>
        </div>
        <div className='bottomContainer'>
          {numeroDeParcelas == 0 ? (<div><p>Selecione o número</p><p>de parcelas</p></div>): (
              <div className='detalhes'>
                <p>Selecionado:</p>
                <p>{numeroDeParcelas} {numeroDeParcelas == 1 ? "Parcela" : "Parcelas"} de R${CalcularValorParcela(valorEmprestimo, numeroDeParcelas)},00</p>
              </div>
          ) }
          <a href={numeroDeParcelas == 0 ? null : target} className='pedirEmprestimo buttonDesigner' style={numeroDeParcelas == 0 ? {backgroundColor: "gray"} : {backgroundColor: "#fceb21"}} rel="noreferrer" target='_blank' onClick={() => {pedirEmprestimoValidacao()}}>
            <p>Pedir</p>
            <p>Empréstimo</p>
          </a>
        </div>
    </div>
  )
}

export default Parcelamento