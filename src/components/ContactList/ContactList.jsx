import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    {contacts.map(({ id, name, number }) => (
      <ul key={id}>
        {' '}
        <li>
          {name}: {number}{' '}
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      </ul>
    ))}
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
