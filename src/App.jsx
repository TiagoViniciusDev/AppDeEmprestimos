import './App.css'
import Home from './components/Pages/Home/Home'
import Parcelamento from './components/Pages/Parcelamento/Parcelamento'
import Valor from './components/Pages/Valor/Valor'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <div className='banner'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='/valor-do-emprestimo' element={<Valor />}/>
            <Route path='/parcelas' element={<Parcelamento />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
