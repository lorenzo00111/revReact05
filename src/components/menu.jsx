import s from './menu.module.css'
import{ link } from 'react-router'

export const Menu = () => {
    return(
        <nav className={s.menu}>
          <Link to="">Home</Link>
          <a href="/charts">Graficos</a>
          <Link to="">Produtos</Link>
          <Link to="">Home</Link>
        </nav>
    )
}