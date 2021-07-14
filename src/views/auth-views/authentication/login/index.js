import React from 'react'
import LoginPage from '../login-2'

const Login = () => {
	return (
		<LoginPage allowRedirect={true} otherSignIn={false} showForgetPassword/>
	)
}

export default Login
