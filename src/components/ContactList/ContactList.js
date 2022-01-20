import PropTypes from 'prop-types';
import { Container, Item, ItemText, ButtonWrap } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Container>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ItemText>
              {name}: {number}
            </ItemText>
            <ButtonWrap onClick={() => onDeleteContact(id)}>Delete</ButtonWrap>
          </Item>
        );
      })}
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
