import './ErrorPage.css'
import { MdError } from "react-icons/md";
import { useNavigate} from 'react-router-dom';


function ErrorPage() {

  const navigate = useNavigate()

  function goHome(){
    navigate("/")
  }

  return (
    <div className='ErrorPage pagesDesigner center'>
        <header>
            <MdError />
            <p>Desculpe, parece que a página que você está tentando acessar não existe ou foi removida</p>
        </header>
        <button className='buttonDesigner' onClick={goHome}>Voltar a página inicial</button>
    </div>
  )
}

export default ErrorPage