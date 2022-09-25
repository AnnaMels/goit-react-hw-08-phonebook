import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import PublicRoute from './PublicRoute/PublicRoute.jsx';

const RegisterPage = lazy(() => import('../pages/RegisterPage.jsx'));
const MyContactsPage = lazy(() => import('../pages/MyContactsPage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage.jsx'));



const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Loading</p>}>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<MyContactsPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default UserRoutes;