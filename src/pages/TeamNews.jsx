import { Link, useParams } from 'react-router-dom'
import { TEAM_DETAILS } from '../data/teamDetails'
import { withBase } from '../utils/paths'

export default function TeamNews() {
  const { slug } = useParams()
  const team = TEAM_DETAILS[slug]

  if (!team) {
    return (
      <main id="main" className="container">
        <h1 className="section-title">Team news not found</h1>
        <p className="page-sub">We could not find news for this team just yet.</p>
        <Link className="btn" to="/news">Back to news</Link>
      </main>
    )
  }

  return (
    <main id="main" className="container">
      <section className="hero" aria-label="Team banner">
        <div className="copy">
          <h1>{team.name} — News</h1>
          <p className="page-sub">{team.newsIntro}</p>
          <div className="actions">
            <Link className="btn ghost" to={`/team/${slug}`}>Team preview</Link>
          </div>
        </div>
        <div className="media frame">
          <img
            src={withBase(team.crest)}
            alt={`${team.name} crest`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect width="1200" height="600" fill="%23f5f6f7"/><text x="600" y="305" text-anchor="middle" font-family="sans-serif" font-size="36" fill="%23666">Team crest placeholder</text></svg>'
            }}
          />
        </div>
      </section>

      <div className="grid news-grid">
        {team.news.map((story) => (
          <article key={story.title} className="card news-card">
            <div className="frame">
              <img
                src={withBase(story.image)}
                alt={story.alt}
                loading="lazy"
              />
            </div>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <div className="actions">
              {story.cta?.url?.startsWith('/') ? (
                <Link className="btn" to={story.cta.url}>{story.cta.label}</Link>
              ) : (
                <a className="btn" href={story.cta?.url || '#'}>{story.cta?.label || 'Read more'}</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
