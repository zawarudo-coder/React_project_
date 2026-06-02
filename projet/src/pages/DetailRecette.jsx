import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function DetailRecette() {
  const { id } = useParams()
  const [recette, setRecette] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let isMounted = true
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)
    setError(null)
    setNotFound(false)
    setRecette(null)

    fetch(`http://localhost:4000/recettes/${id}`)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true)
          throw new Error('Not found')
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (isMounted) setRecette(data)
      })
      .catch((err) => {
        if (isMounted) {
          if (err.message === 'Not found') return
          setError(err.message || 'Erreur réseau')
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [id])

  if (loading) return <p>Chargement...</p>
  if (notFound) return (
    <div>
      <h2>Recette non trouvée</h2>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  )
  if (error) return <p>Erreur : {error}</p>
  if (!recette) return <p>Impossible de charger la recette.</p>

  return (
    <article>
      <h1>{recette.otitre}</h1>
      {recette.oimageUrl && (
        <img src={recette.oimageUrl} alt={recette.otitre} className="detail-img" />
      )}
      <h3>Ingrédients</h3>
      <p>{recette.oingredients}</p>
      <h3>Instructions</h3>
      <p>{recette.oinstructions}</p>
      <Link to="/">Retour</Link>
    </article>
  )
}
