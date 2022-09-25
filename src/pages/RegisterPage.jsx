import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { register } from "../redux/auth/auth-operations";
import useAuth from "../hooks/useAuth";
import Alert from '@mui/material/Alert';


const RegisterPage = () => {
    const dispatch = useDispatch();
    const isLogin = useAuth();

    const error = useSelector(state => state.auth.error || {});
    const { status, message = 'Error' } = error;

    const onRegister = (data) => {
        dispatch(register(data))
    };

        if(isLogin) {
        return <Navigate to="/contacts" />
    }

    return (
        <>
            <RegisterForm onSubmit={onRegister} />
            {status && <Alert severity="error">{message}</Alert>}
        </>
    );
}

export default RegisterPage;