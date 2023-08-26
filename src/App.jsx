import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'

import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  
  const [presupuesto, setPresupuesto] = useState(0)
  const [IsValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal , setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

   const handleNuevoGasto = () =>{
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
   }
  return (
      <div>
        <Header 
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          IsValidPresupuesto={IsValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />

      {IsValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img
            src={IconoNuevoGasto}
            alt="icono neuvo gasto"
            onClick={handleNuevoGasto}
        />
        </div>
      )}

      {modal && 
        <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        />
      
      }

      </div>
  )
}

export default App

