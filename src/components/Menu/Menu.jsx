import AuthMenu from "./AuthMenu/AuthMenu";
import UserMenu from "./UserMenu/UserMenu";
import useAuth from "../../hooks/useAuth";

const Menu = () => {
    const isLogin = useAuth();
    return (
        <>
            {isLogin ? <UserMenu /> : <AuthMenu />}
        </>
    );
};

export default Menu;