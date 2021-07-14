import Masthead from "../../components/Masthead";
import Auth from '../../utils/auth';

function Admin() {
	return (
		<>
			<Masthead title="Admin" />

			{Auth.loggedIn() ? <h2>Logged in</h2> : <h2>Not logged in</h2>}
		</>
	);
}

export default Admin;