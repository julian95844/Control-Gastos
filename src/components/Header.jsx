import NuevoPresupuesto from './NuevoPresupuesto'


const Header = ({
    presupuesto, 
    setPresupuesto, 
    IsvalidPresupuesto, 
    setIsValidPresupuesto
}) => {
    
  return (
    <header>
      <h1>Planificacion de Gastos</h1>

      {IsvalidPresupuesto ? (
        <p>Control Presupuesto</p>
      ) : (
            <NuevoPresupuesto 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />
      )}


    </header>
  )
}

export default Header
