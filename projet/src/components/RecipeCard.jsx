import { Link } from 'react-router-dom'

export default function RecipeCard({ recette }) {
  return (
    <article className="recipe-card">
      <img src={recette.oimageUrl} alt={recette.otitre} className="thumb" />
      <div className="card-body">
        <h3>{recette.otitre}</h3>
        <Link to={`/recette/${recette.id}`} className="details-link">
          Voir le détail
        </Link>
      </div>
    </article>
  )
}
