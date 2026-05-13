import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '20px', display: 'flex', gap: '20px' }}>
      
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Home
      </NavLink>

      <NavLink
        to="/list"
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Lista
      </NavLink>

      <NavLink
        to="/form"
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Formulario
      </NavLink>

    </nav>
  )
}

export default Navbar