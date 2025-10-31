import { Link } from 'react-router-dom'
import teamsData from '../data/teams.json'

export default function Teams(){
  const teams = teamsData.items.slice(0, 3) // Show first 3 teams as per original

  return (
    <main id="main" className="container">
      <h1 className="section-title">Teams</h1>
      <p className="page-sub">Browse squads and open a sample preview page.</p>

      <section className="grid" aria-label="Team list">
        {teams.map(team => (
          <article key={team._id} className="card">
            <div className="frame">
              <img src={`/${team.img_name}`} alt={`${team.name} crest`} />
            </div>
            <h3>{team.name}</h3>
            <p>Record: {team.record} • Streak: {team.streak}</p>
            <div className="actions">
              <Link className="btn" to={`/team/${team.name.toLowerCase().replace(/\s+/g, '-')}`}>
                Open preview
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
