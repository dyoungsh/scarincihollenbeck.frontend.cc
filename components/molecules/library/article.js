import Link from 'next/link'
import Col from 'react-bootstrap/Col'
import { createMarkup, extractDescription, formatDate } from 'utils/helpers'

export default function Article({ post }) {
  return (
    <Col sm={12} md={10} className="mx-3 mb-4">
      <Link href={post.link.replace('https://wp.scarincihollenbeck.com', '')}>
        <a className="text-dark">
          <p className="h5 mb-0">
            <strong>{post.title.rendered}</strong>
          </p>
          <p className="d-block mt-1 mb-2">{formatDate(post.date)}</p>
          <div
            style={{ lineHeight: '1.25', color: '#444' }}
            dangerouslySetInnerHTML={createMarkup(extractDescription(post.excerpt.rendered))}
          />
        </a>
      </Link>
    </Col>
  )
}
