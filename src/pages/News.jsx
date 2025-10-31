export default function News(){
  return (
    <main id="main" className="container">
      <h1 className="section-title">Latest News</h1>
      <p className="page-sub">Hand-picked stories from around the league.</p>

      <div className="grid" style={{gridTemplateColumns: '1fr', gap: '16px'}}>
        <article className="card" style={{gridColumn: '1 / -1'}}>
          <div className="frame">
            <img src="/images/penix.png" alt="Falcons quarterback scanning the field" />
          </div>
          <div className="actions">
            <a className="btn" href="/team/atlanta-falcons">Open preview</a>
            <a className="btn ghost" href="/team/atlanta-falcons/news">Team news</a>
          </div>
          <h3>Falcons streak hits three</h3>
          <p>The Falcons defense clamps down again, setting the tone for a pivotal road win.</p>
        </article>

        <article className="card" style={{gridColumn: '1 / -1'}}>
          <div className="frame">
            <img src="/images/amad.png" alt="Manchester United winger attacking space" />
          </div>
          <div className="actions">
            <a className="btn" href="/team/manchester-united">Open preview</a>
            <a className="btn ghost" href="/team/manchester-united/news">Team news</a>
          </div>
          <h3>United holds on late</h3>
          <p>Back-to-back one-goal wins have Manchester climbing the standings.</p>
        </article>

        <article className="card" style={{gridColumn: '1 / -1'}}>
          <div className="frame">
            <img src="/images/hawksfan.png" alt="Hawks supporters in the away section" />
          </div>
          <div className="actions">
            <a className="btn" href="/team/atlanta-hawks">Open preview</a>
            <a className="btn ghost" href="/team/atlanta-hawks/news">Team news</a>
          </div>
          <h3>Hawks look to rebound</h3>
          <p>The Hawks focuses on set-piece execution heading into a challenging stretch.</p>
        </article>
      </div>
    </main>
  )
}
