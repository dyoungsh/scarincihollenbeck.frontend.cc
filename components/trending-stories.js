import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';

export default function TrendingStories({ title, content }) {
  return (
    <>
      <p className={`${fontStyles.ft12rem} mb-2`}>
        <strong>{title}</strong>
      </p>
      <ul>
        {content
          .filter((_, i) => i <= 4)
          .map((post, index) => (index === 0 ? (
            <li key={post.title} className="list-unstyled">
              {JSON.stringify(post)}
            </li>
          ) : (
            <li key={post.title} className="list-unstyled">
              <Link href={post.slug || post.link || '/'}>
                <a className="text-dark">{post.title}</a>
              </Link>
              {typeof post.author === 'string' && (
              <div className="my-0 py-0 d-block">
                <small>
                  <strong>Author: </strong>
                  {' '}
                  {post.author}
                </small>
              </div>
              )}
            </li>
          )))}
      </ul>
      <style jsx>
        {`
          ul {
            margin-left: -2.48em;
            margin-top: -10px;
          }

          ul li {
            margin-bottom: 6px;
            padding-bottom: 10px;
            padding-top: 10px;
            line-height: 1.4;
            color: #444;
          }
        `}
      </style>
    </>
  );
}
