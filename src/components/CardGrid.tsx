import React from 'react';
import Link from '@docusaurus/Link';

export function Card({ title, description, to }) {
  return (
    <div className="card kadena-card-cta">
      <div className="card__header kadena-card-cta_header">
        <span className="kadena-card-cta_title">{title}</span>
      </div>
      <div className="card__body kadena-card-cta_body">
        <p>{description}</p>
      </div>
      <div className="card__footer kadena-card-cta_footer">
        <Link
          className="button button--secondary button--block kadena-card-cta_button"
          to={to}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export function Grid({ children, columns }) {
  return (
    <div className={`row row--${columns}`}>
      {React.Children.map(children, (child) => (
        <div className={`col col--${12 / columns}`}>{child}</div>
      ))}
    </div>
  );
}