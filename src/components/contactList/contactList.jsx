import { deleteContact } from 'store/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectItems } from 'store/selector';

const ContactList = () => {
  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filtered = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;
  return (
    <ul>
      {filtered.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button
            style={{ marginLeft: '20px' }}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
