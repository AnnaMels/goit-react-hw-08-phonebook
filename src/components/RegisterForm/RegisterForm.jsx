import { initialState } from "./initialState";
import useForm from "../../hooks/useForm";
import Button from '@mui/material/Button';
import styles from './register-form.module.css';

export const RegisterForm = ({ onSubmit }) => {

    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})
    const {name, email, password} = state;

    return (
        <form className={styles.form} action="" onSubmit={handleSubmit}>
            <header className={styles.formHeader}>
                <h2 className={styles.formTitle}>Sign Up</h2>
                <p>signup here using your username and password</p>
            </header>
            <div className={styles.inputWrapper}>
                <label htmlFor="">Name:</label>
                <input onChange={handleChange} value={name} name="name" type="text" placeholder="Введите имя пользователя" required />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="">Email:</label>
                <input onChange={handleChange} value={email} name="email" type="email" placeholder="Введите email пользователя" />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="">Password:</label>
                <input onChange={handleChange} name="password" value={password} type="password" placeholder="Введите пароль пользователя" />
            </div>
            <div className={styles.buttonWrapper}>
                <Button className={styles.button} variant="outlined" type="submit">Sign up</Button>
            </div>
        </form>
    );
}