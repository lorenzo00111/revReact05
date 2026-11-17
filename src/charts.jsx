import { useState } from 'react'
import s from './charts.module.css'
import { Menu } from './components/menu'

function Charts(){
    const [show, isShow] = useState("")
    
  return(
    <>
       <Menu/>
        <div className={wrapCharts}>
          <div className={s.wrapBtns}>
            <button className={bntChart} onClick={() => setShow("barra")}>Graficos Barra</button>
             <button className={bntChart} onClick={() => setShow("barra")}>Graficos Pizza</button>
             <button className={bntChart} onClick={() => setShow("barra")}>Graficos Linha</button>
        </div>

        {show === "barra" && <h1>Barra</h1>}

        
        {show === "pizza" && <h1>Barra</h1>}
        {show === "linha" && <h1>Barra</h1>}

       </div>
    </>
  )
}

export default Charts