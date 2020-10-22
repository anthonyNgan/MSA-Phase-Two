import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Button} from '@material-ui/core';

type ILogin = () => {
    isAuthenticated: boolean
}

const Login = () => {
    const { isAuthenticated,  loginWithRedirect } = useAuth0();

    return !isAuthenticated && (
        <Button onClick={loginWithRedirect}>Log in</Button>
    )
}

export default Login;