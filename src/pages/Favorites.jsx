import { Link } from 'react-router-dom'
import { withBase } from '../utils/paths'

const favorites = [
  {
    id: 'atlanta-falcons',
    name: 'Atlanta Falcons',
    crest: 'images/falconslogo.png'
  },
  {
    id: 'manchester-united',
    name: 'Manchester United',
    crest: 'images/united.png'
  }
]

export default function Favorites(){
  return (
    <main id="main" className="container">
      <h1 className="section-title">Favorites</h1>
      <p className="page-sub">Soon you'll be able to save teams and players here.</p>

      <div className="grid">
        {favorites.map((favorite) => (
          <article key={favorite.id} className="card">
            <div className="frame">
              <img src={withBase(favorite.crest)} alt={`${favorite.name} crest`} />
            </div>
            <div className="actions">
              <Link className="btn" to={`/team/${favorite.id}`}>Open preview</Link>
              <Link className="btn ghost" to={`/team/${favorite.id}/news`}>Team news</Link>
            </div>
            <h3>{favorite.name}</h3>
            <p>Pinned</p>
          </article>
        ))}
      </div>
    </main>
  )
}
