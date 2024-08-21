import React from 'react';
import Link from '@docusaurus/Link';

export function Card({ title, description, to }) {
  return (
    <div className="card">
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <Link
          className="button button--secondary button--block"
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