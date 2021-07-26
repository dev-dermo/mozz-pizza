import Masthead from "../../components/Masthead";

import { Redirect } from "react-router-dom";

import Auth from '../../utils/auth';

function Admin() {
	if (!Auth.loggedIn()) {
		return <Redirect to="/login" />;
	}

	return (
		<>
			<Masthead title="Admin" />

			{Auth.loggedIn() ? <h2>Logged in</h2> : <h2>Not logged in</h2>}
		</>
	);
}

export default Admin;