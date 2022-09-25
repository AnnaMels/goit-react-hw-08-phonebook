import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Menu from "../Menu/Menu";
import UserRoutes from "../UserRoutes";
import { current } from "../../redux/auth/auth-operations";


export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, [dispatch]);

    return (
         <>
            <Menu />
            <UserRoutes />
        </>
    );
};
