import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <main id="main" className="container">
      <section className="hero" aria-label="Welcome">
        <div className="copy">
          <h1>All Your Game Day Info — In One Place</h1>
          <p className="page-sub">
            Track teams, schedules, and storylines with a clean, mobile-first design.
            Images and copy are finalized for Part 4; no JS beyond the hamburger.
          </p>
        </div>
        <div className="media frame">
          <img
            src="/images/sports.jpg"
            alt="Players running onto the field at sunset"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect width="1200" height="600" fill="%23f5f6f7"/><text x="600" y="310" text-anchor="middle" font-family="sans-serif" font-size="38" fill="%23666">Hero image placeholder</text></svg>';
            }}
          />
        </div>
      </section>

      <h2 className="section-title">Highlights</h2>
      <div className="grid">
        <article className="card">
          <div className="frame">
            <img src="/images/falcons.jpg" alt="Falcons players celebrating a score" />
          </div>
          <h3>Falcons ride late surge</h3>
          <p>The Falcons closes strong in the fourth for their third straight win.</p>
          <div><Link className="btn" to="/news">Read recap</Link></div>
        </article>

        <article className="card">
          <div className="frame">
            <img src="/images/united.jpg" alt="United forward sprinting down the sideline" />
          </div>
          <h3>United edges Chealsea</h3>
          <p>Defense seals it in the final minute to take the series lead.</p>
          <div><Link className="btn" to="/news">Read recap</Link></div>
        </article>

        <article className="card">
          <div className="frame">
            <img src="/images/hawks.jpg" alt="Hawks huddle before kickoff" />
          </div>
          <h3>Hawks regroup on the road</h3>
          <p>New look lineup aims to reset momentum in a tough venue.</p>
          <div><Link className="btn" to="/news">Read preview</Link></div>
        </article>
      </div>
    </main>
  )
}