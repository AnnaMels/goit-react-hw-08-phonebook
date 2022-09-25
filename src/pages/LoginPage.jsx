import LoginForm from "../components/LoginForm/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../redux/auth/auth-operations";
import useAuth from "../hooks/useAuth";
import Alert from '@mui/material/Alert';
 

const LoginPage = () => {
    const dispatch = useDispatch();
    const isLogin = useAuth();
    const error = useSelector(state => state.auth.error || {});
    const { status, message = 'Error' } = error;


      if(isLogin) {
      return <Navigate to="/contacts" />
    };

    const onLogin = (data) => {
        dispatch(login(data));
    }
    
    return (
        <>
            <LoginForm onSubmit={onLogin} />
            {status && <Alert severity="error">{message}</Alert>}
        </>
    );
};

export default LoginPage;