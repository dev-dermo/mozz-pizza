import Masthead from "../../components/Masthead";
import LoginForm from "../../components/LoginForm";

import { Redirect } from 'react-router-dom';

import Auth from '../../utils/auth';

function Login() {
	if (Auth.loggedIn()) {
		return <Redirect to="/admin" />;
	}

	return (
		<>
			<Masthead title="Login" />

			{/* {Auth.loggedIn() ? <h2>Logged in</h2> : <h2>Not logged in</h2>} */}

			<LoginForm />
		</>
	);
}

export default Login;