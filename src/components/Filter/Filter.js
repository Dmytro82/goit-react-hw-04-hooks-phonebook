import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <Label>
        Find contacts by name
        <Input
          name="filter"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={value}
          onChange={onChange}
        />
      </Label>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
