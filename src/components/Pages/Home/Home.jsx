import './Home.css'
import Logo from '../../Logo/Logo'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Home'>
        <div className='main center pagesDesigner'>
            <Logo />
            <Link to="/Matheus-Emprestimos/valor-do-emprestimo">Simular Empréstimo</Link>
        </div>
    </div>
  )
}

export default Home