import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
    const isLogin = useAuth();

    if (isLogin) {
        return <Navigate to="/contacts" />
    }

    return <Outlet />
};

export default PublicRoute;