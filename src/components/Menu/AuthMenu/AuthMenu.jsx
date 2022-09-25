import { NavLink } from "react-router-dom";
import MenuList from '@mui/material/MenuList';
import ListItem from '@mui/material/ListItem';
import styles from './AuthMenu.module.css';

const AuthMenu = () => {
    return (
        <MenuList className={styles.menuList}>
            <ListItem ><NavLink className={({ isActive }) => isActive ? `${styles.active}` : `${styles.menuLink}`} to="/contacts">My contacts</NavLink></ListItem>
            <div className={styles.navWrapper}>
                <ListItem><NavLink className={({ isActive }) => isActive ? `${styles.active}` : `${styles.menuLink}`} to="/register">Register</NavLink></ListItem>
                <span>|</span>
                <ListItem><NavLink className={({ isActive }) => isActive ? `${styles.active}` : `${styles.menuLink}`} to="/login">Login</NavLink></ListItem>
            </div>
        </MenuList>
    );
}

export default AuthMenu;