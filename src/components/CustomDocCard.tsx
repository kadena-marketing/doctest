import React from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common/internal';

function CustomDocCard({ item }) {
  return (
    <article className="col col--6 margin-bottom--lg ">
      <div className="card padding--lg cardContainer">
        <h2 className="text--truncate cardTitle" title={item.label}>
          <Link to={item.href} className="">
            {item.label}
          </Link>
        </h2>
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