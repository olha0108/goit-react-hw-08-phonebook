import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onFilter }) => (
  <>
    <input type="text" value={value} onChange={onFilter} />
  </>
);

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};