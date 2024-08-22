import React from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common/internal';

function CustomDocCard({ item }) {
  return (
    <article className="col col--6 margin-bottom--lg ">
      <div className="card padding--lg kadena-card-box">
        <span className="text--truncate cardTitle">
          <Link to={item.href} className="" title={item.label}>
            {item.label}
          </Link>
        </span>
        {item.description && (
          <p className="text--truncate cardDescription" title={item.description}>
            {item.description}
          </p>
        )}
      </div>
    </article>
  );
}

export default function CustomDocCardList() {
  const category = useCurrentSidebarCategory();
  return (
    <section className="row cardGrid">
      {category.items.map((item, index) => (
        <CustomDocCard key={index} item={item} />
      ))}
    </section>
  );
}