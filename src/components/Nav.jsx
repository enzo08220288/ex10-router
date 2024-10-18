import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pag1">Página 1</Link></li>
            <li><Link to="/pag2">Página 2</Link></li>
        </ul>
    </nav>
  )
}

export default Nav