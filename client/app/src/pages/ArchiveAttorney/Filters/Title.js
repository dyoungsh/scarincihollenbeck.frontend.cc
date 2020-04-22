import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import PropTypes from 'prop-types';

function FilterTitle(props) {
  const { designation, onSelect } = props;

  return (
    <li className="dropdown w3_megamenu-fw nav-item list-inline-item filter">
      <span data-toggle="dropdown" id="titleDropDown" className="dropdown-toggle btn btn-light my-1">
        Filter by title
        <FontAwesomeIcon icon={faCaretDown} className="ml-5 mt-1" />
      </span>
      <div className="dropdown-menu" aria-labelledby="titleDropDown">
        { designation.map((d) => <button type="button" name="designation" className="dropdown-item btn btn-link" key={d.title} onClick={(e) => onSelect(e, d.title)}>{d.title}</button>) }
      </div>
    </li>
  );
};

FilterTitle.propTypes = {
  designation: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
};


FilterTitle.defaultProps = {
  designation: [],
  onSelect: () => {},
};

export default FilterTitle;
