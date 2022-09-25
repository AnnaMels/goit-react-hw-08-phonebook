import { nanoid } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts, addContact } from "../../redux/contacts/contacts-operations";
import styles from './contact-form.module.css';
import Container from '@mui/material/Container';




export default function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    const handleNameInfo = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value)
                break;
            default:
                break;
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newData = {
            id: nanoid(),
            name,
            number
        }

        dispatch(addContact(newData))
        reset();
    }


    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <Container>
            <form onSubmit={onFormSubmit}>
                <div className={styles.inputWrapper}>
                    <label>Name: &nbsp;
                        <input className={styles.input}
                            onChange={handleNameInfo}
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                </div>
                <div className={styles.inputWrapper}>
                    <label>Number: &nbsp;
                        <input className={styles.input}
                            onChange={handleNameInfo}
                            type="tel"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                </div>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} variant="outlined">Add contact</button>
                </div>
            </form>
        </Container>
    );
}

Form.propTypes = {
        name: PropTypes.string,
        number: PropTypes.number
    };

