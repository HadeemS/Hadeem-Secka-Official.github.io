import { Link, useParams } from 'react-router-dom'
import { TEAM_DETAILS } from '../data/teamDetails'
import { withBase } from '../utils/paths'

export default function Team() {
  const { slug } = useParams()
  const team = TEAM_DETAILS[slug]

  if (!team) {
    return (
      <main id="main" className="container">
        <h1 className="section-title">Team not found</h1>
        <p className="page-sub">The team you are looking for is not available yet.</p>
        <Link className="btn" to="/teams">Back to teams</Link>
      </main>
    )
  }

  return (
    <main id="main" className="container">
      <section className="hero" aria-label="Team overview">
        <div className="copy">
          <h1>{team.name}</h1>
          <p className="page-sub">{team.subtitle}</p>
          <div className="actions">
            <Link className="btn ghost" to={`/team/${slug}/news`}>Team news</Link>
          </div>
        </div>
        <div className="media frame">
          <img
            src={withBase(team.heroImage)}
            alt={team.heroAlt}
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect width="1200" height="600" fill="%23f5f6f7"/><text x="600" y="305" text-anchor="middle" font-family="sans-serif" font-size="36" fill="%23666">Team hero image</text></svg>'
            }}
          />
        </div>
      </section>

      <div className="grid">
        <article className="card card--wide">
          <h3>Key Stats</h3>
          <table className="table" aria-label={`${team.name} key stats`}>
            <tbody>
              {team.stats.map(({ label, value }) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card card--wide">
          <h3>Roster (sample)</h3>
          <ul>
            {team.roster.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </article>
      </div>
    </main>
  )
}
