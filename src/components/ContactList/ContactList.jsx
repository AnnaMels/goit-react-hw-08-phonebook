import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contacts-operations";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';




export default function ContactsList() {
    const dispatch = useDispatch();
    const contactItems = useSelector((state) => state.contacts.items);
    const filterString = useSelector((state) => state.filter);
    const filteredList = contactItems.filter(contact => contact.name.toLowerCase().includes(filterString));

    const delContact = (id) => {
        dispatch(removeContact(id));
    }

    return (
        <Container>
            <ul>
                {filteredList.map(({ name, id, number }) => {
                    return (
                        <li key={id}>{name}: {number}
                            <IconButton aria-label="delete" onClick={() => delContact(id)}><DeleteIcon fontSize="large" /></IconButton>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    deleteHandler: PropTypes.func
};