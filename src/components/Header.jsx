import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'


const Header = ({
    presupuesto, 
    setPresupuesto, 
    IsValidPresupuesto, 
    setIsValidPresupuesto
}) => {
  return (
    <header>

      {IsValidPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
        />
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
