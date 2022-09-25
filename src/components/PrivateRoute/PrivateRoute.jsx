import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
    const isLogin = useAuth();

    if (!isLogin) {
        return <Navigate to="/login" />
    }

    return <Outlet />
};

export default PrivateRoute;