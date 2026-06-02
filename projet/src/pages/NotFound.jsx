import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main>
      <h1>Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </main>
  )
}
