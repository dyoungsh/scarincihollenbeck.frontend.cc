import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import Link from 'next/link';

export default function AttorneyCard(props) {
  const {
    link,
    image,
    name,
    title,
    number,
    email,
    height,
    width,
    type,
  } = props;

  return (
    <div className="d-flex flex-row attorney-card" height={height}>
      <Link href="/attorney/[slug]" as={link}>
        <a>          
          <img rel="preload" src={image} alt={name} className="mr-1" style={{ width }} />
        </a>
      </Link>
      <div className="mt-3 ml-3">
        <Link href="/attorney/[slug]" as={link}>
          <a>
            <p className="text-uppercase red-title small-excerpt">
              <strong>{name}</strong>
            </p>
            <p className="mb-1 small-excerpt">
              <strong>
                {title}
              </strong>
            </p>
          </a>
        </Link>
        <div className="small-excerpt">
          <FontAwesomeIcon icon={faPhone} className="mw-12" />
          {' '}
          {number}
          <br />
          <FontAwesomeIcon icon={faEnvelope} className="mw-12" />
          {' '}
          {email}
        </div>
      </div>
    </div>
  );
}