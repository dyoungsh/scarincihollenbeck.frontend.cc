import React from 'react';
import PropTypes from 'prop-types';

function AboutDiversity(props) {
  const { relatedPages } = props;

  console.log('relatedPages');
  console.log(relatedPages);

  return (
    <div className="w-100 mt-3">
      <div className="sidebar-title">
        Scarinci Hollenbeck Diversity
      </div>
      <div className="off-white">
        <ul className="pl-0 pt-2 pb-1 pr-1 sidebar-content-page">
          { relatedPages.map((val) => (
            <li key={val}>
              <a href={`${window.location.origin}/${val}`} className="proxima-bold text-capitalize">
                {val.replace(/-/g, ' ')}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

AboutDiversity.propTypes = {
  relatedPages: PropTypes.arrayOf(PropTypes.string),
};

AboutDiversity.defaultProps = {
  relatedPages: [],
};

export default AboutDiversity;
