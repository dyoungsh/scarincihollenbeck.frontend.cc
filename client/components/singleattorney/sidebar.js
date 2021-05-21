import Link from 'next/link';
import Slider from 'react-slick';

import fontStyles from 'styles/Fonts.module.css';
import marginStyles from 'styles/Margins.module.css';
/** *
 * TODO: Fix award image sizes
 */

export default function AttorneyProfileSidebar({ services, contact, awards }) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={marginStyles.mtMinusMd2}>
      <p className={fontStyles.ft12rem}>
        <strong>How I can help</strong>
      </p>
      <ul>
        {services.map((c) => (
          <li key={c.title} className="list-unstyled">
            <Link href={c.link}>
              <a className="text-dark">{c.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          ul {
            margin-left: -2.48em;
            margin-top: -10px;
          }

          ul li {
            margin-bottom: 7px;
          }
        `}
      </style>
      <hr />
      <p className={`${fontStyles.ft12rem} mb-0`}>
        <strong>Let&apos;s get in touch</strong>
      </p>
      <p className="mt-2 mb-0">And we can discuss how my legal services can benefit you.</p>
      <Link href={contact}>
        <a className="btn btn-danger px-4 my-2">
          Contact
        </a>
      </Link>
      {awards.length > 0 && (
        <div>
          <hr />
          <Slider {...settings}>
            {awards.map((award) => (
              <div key={award.title}>
                <a href={award.link}>
                  <img src={award.featuredImg} alt={award.title} />
                </a>
              </div>
            ))}
          </Slider>
          <small>
            <Link href="/awards">
              <a>Award Methodology</a>
            </Link>
          </small>
        </div>
      )}

    </div>
  );
}
