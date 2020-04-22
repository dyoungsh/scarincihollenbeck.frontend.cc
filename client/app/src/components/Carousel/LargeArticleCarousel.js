
import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

function limitTitleLength(title) {
  if (title.length > 200) {
    return `${title.substring(0, 200)} ...`;
  }

  return title;
}

function LargeArticleCarousel(props) {
  const { id, post } = props;
  const {
    link, image, title, category,
  } = post;

  let postImg;
  let imgCategory;

  if (!image) {
    postImg = props.post.featuredImg;
  }

  if (category && category.length > 0) {
    imgCategory = category[0].name;
  }

  return (
    <div className={`pb-2 px-4 carousel-slide level-${id}`}>
      <a href={link}>
        <LazyLoad height={150}>
          <img rel="preconnect" src={(image) || ((postImg) || '')} alt={title} className="img-thumbnail mx-auto d-block" />
        </LazyLoad>
        <h5 className="mt-3 mb-2 text-center">{(imgCategory) || category }</h5>
        <p className="text-muted small-excerpt text-center">{limitTitleLength(title)}</p>
      </a>
    </div>
  );
}

LargeArticleCarousel.propTypes = {
  post: PropTypes.objectOf(PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.bool,
  )),
  id: PropTypes.string,
};

LargeArticleCarousel.defaultProps = {
  post: {},
  id: '',
};

export default LargeArticleCarousel;
