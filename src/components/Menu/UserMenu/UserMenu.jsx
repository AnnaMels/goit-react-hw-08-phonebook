import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/auth-operations";
import styles from './user-menu.module.css';
import Button from '@mui/material/Button';


const UserMenu = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    const { name } = user;

    const onLogout = () =>  dispatch(logout());
    
    return (
        <div className={styles.userMenu}>
            <span>{name}</span>
            <Button className={styles.button} variant="outlined" onClick={onLogout}>Logout</Button>
        </div>
    );
};

export default UserMenu;