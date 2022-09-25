import { initialState } from "./initialState";
import useForm from "../../hooks/useForm";
import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './login-form.module.css';

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit })

    const { email, password } = state;
    return (
        <form className={styles.form} action="" onSubmit={handleSubmit}>
            <header className={styles.formHeader}>
                <h2 className={styles.formTitle}>Log In</h2>
                <p>login here using your username and password</p>
            </header>
            <div className={styles.inputWrapper}>
                <label htmlFor="">Email:</label>
                <input value={email} name="email" onChange={handleChange} type="email" placeholder="Введите email пользователя" />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="">Password:</label>
                <input value={password} name="password" onChange={handleChange} type="password" placeholder="Введите пароль пользователя" />
            </div>
            <div>
                <Button className={styles.button} variant="outlined" type="submit">Log In</Button>
            </div>
        </form>
    );
};

export default LoginForm;