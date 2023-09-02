import React from 'react'
import Gasto from './Gasto'
const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, gastosFiltrados, filtro}) => {
  return (
    <div className='listado-gastos contenedor'>
      

      { filtro ? (
        <>
          <h2>{gastosFiltrados.length ? "Gastos" : "No hay en esta categoria"}</h2>
            {gastosFiltrados.map( gasto =>(
              <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
              />
            
              ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "no hay gastos"}</h2>
          {gastos.map( gasto =>(
              <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
              />
            ))}
        </>
      )
    }
    </div>
  )
}
export default ListadoGastos
