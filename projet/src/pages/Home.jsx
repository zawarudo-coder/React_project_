import { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'

export default function Home() {
  const [recettes, setRecettes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    fetch('http://localhost:4000/recettes')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (isMounted) setRecettes(data)
      })
      .catch((err) => {
        if (isMounted) setError(err.message)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  if (loading) return <p>Chargement des recettes...</p>
  if (error) return <p>Erreur : {error}</p>

  return (
    <main>
      <h1>Liste des recettes</h1>
      <section className="grid">
        {recettes.map((r) => (
          <RecipeCard key={r.id} recette={r} />
        ))}
      </section>
    </main>
  )
}
