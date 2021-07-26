import { Redirect } from "react-router-dom";

import Masthead from "../../components/Masthead";

import Auth from '../../utils/auth';

function Admin() {
	if (!Auth.loggedIn()) {
		return <Redirect to="/login" />;
	}

	const name = Auth.getProfile().data.name;

	return (
		<>
			<Masthead title="Administrator Dashboard" />

			{Auth.loggedIn() && Auth.isAdmin() ? <h2>Hello {name}</h2> : <h2>Not logged in</h2>}
		</>
	);
}

export default Admin;