import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectItems } from 'store/selector';
import { deleteContact, fetchContacts } from 'store/thunks';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);

  const filtered = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ul>
      {filtered.map(({ name, phone, id }) => (
        <li key={id}>
          {name}: {phone}
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
