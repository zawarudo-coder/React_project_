import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AjouterRecette() {
  const [form, setForm] = useState({ otitre: '', oingredients: '', oinstructions: '', oimageUrl: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    if (!form.otitre || !form.oingredients || !form.oinstructions) {
      setError('Veuillez remplir tous les champs obligatoires.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('http://localhost:4000/recettes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <h1>Ajouter une recette</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre *</label>
          <input name="otitre" value={form.otitre} onChange={handleChange} />
        </div>
        <div>
          <label>Ingrédients *</label>
          <textarea name="oingredients" value={form.oingredients} onChange={handleChange} />
        </div>
        <div>
          <label>Instructions *</label>
          <textarea name="oinstructions" value={form.oinstructions} onChange={handleChange} />
        </div>
        <div>
          <label>URL de l'image</label>
          <input name="oimageUrl" value={form.oimageUrl} onChange={handleChange} />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>{loading ? 'Publication...' : 'Publier'}</button>
      </form>
    </main>
  )
}
