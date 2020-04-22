import React from 'react';
import PropTypes from 'prop-types';

const noImg = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png';

function MainSidebarContent(props) {
  const { latest } = props;

  return (
    <ul className="no-dots mx-3 mt-0">
      {
      latest.map((val) => (
        <li key={val.title} className="w-100 mb-5">
          <a href={val.link}>
            <img src={val.image ? val.image : noImg} className="img-fluid" alt={val.title} />
            <h5 className="mt-3 mb-1">{val.title}</h5>
            <p className="text-muted small-excerpt">
              {val.excerpt}
            </p>
          </a>
        </li>
      ))
    }
    </ul>
  );
}

MainSidebarContent.propTypes = {
  latest: PropTypes.arrayOf(PropTypes.object),
};

MainSidebarContent.defaultProps = {
  latest: [],
};

export default MainSidebarContent;
