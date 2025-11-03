import { Link } from 'react-router-dom'
import '../styles/cards.css'
import { withBase } from '../utils/paths'

export default function NewsCard({ news }) {
  return (
    <article className="card news-card">
      <div className="frame">
        <img src={withBase(news.image)} alt={news.alt} />
      </div>
      <div className="actions">
        {news.previewLink?.startsWith('/') ? (
          <Link className="btn" to={news.previewLink}>
            Open preview
          </Link>
        ) : (
          <a className="btn" href={news.previewLink}>
            Open preview
          </a>
        )}
        {news.newsLink?.startsWith('/') ? (
          <Link className="btn ghost" to={news.newsLink}>
            Team news
          </Link>
        ) : (
          <a className="btn ghost" href={news.newsLink}>
            Team news
          </a>
        )}
      </div>
      <h3>{news.title}</h3>
      <p>{news.description}</p>
    </article>
  )
}
