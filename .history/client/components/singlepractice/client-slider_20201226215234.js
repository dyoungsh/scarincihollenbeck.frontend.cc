import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import fontStyles from 'styles/Fonts.module.css';
import fontStyles from 'styles/Fonts.module.css';

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

export default function PracticeClientSlider({ content }) {
  console.log(content)
  return (
    <>
      Slider will go here...
    </>
  );
}
