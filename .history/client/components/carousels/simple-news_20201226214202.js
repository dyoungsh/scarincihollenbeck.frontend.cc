import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import textStyles from 'styles/Text.module.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function limitTitleLength(title) {
  if (title.length > 200) {
    return `${title.substring(0, 200)} ...`;
  }

  return title;
}

export default function CarouselsSimpleNews({ slides }) {
  return (
    <Carousel
      aria-label="carousel"
      responsive={responsive}
      infinite
      arrows
      swipeable
    >
      {slides.map((post) => (
        <div
          key={post.title}
          className="pb-2 px-4"
        >
          <Link href={post.link || '/'}>
            <a>
              <Image
                src={
                  post.image
                    ? post.image
                    : post.featuredImg
                      ? post.featuredImg
                      : '/images/no-image-found-diamond.png'
                }
                alt={post.title}
              />
              <p className={`${textStyles.smallExcerpt} text-center text-dark`}>
                {limitTitleLength(post.title)}
              </p>
            </a>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
