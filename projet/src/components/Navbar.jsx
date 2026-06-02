import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/ajouter">Ajouter une recette</Link>
        </li>
      </ul>
    </nav>
  )
}
