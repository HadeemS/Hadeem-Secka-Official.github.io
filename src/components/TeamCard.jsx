export default function TeamCard({ name, league, image, blurb, ctaText }) {
  return (
    <article className="card">
      {image && <img src={image} alt={name} className="card__image" />}
      <div className="card__content">
        {league && <p className="card__kicker">{league}</p>}
        {name && <h3 className="card__title">{name}</h3>}
        {blurb && <p className="card__blurb">{blurb}</p>}
        {ctaText && <a href="#" className="card__cta">{ctaText}</a>}
      </div>
    </article>
  )
}