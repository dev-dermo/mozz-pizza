import { Link } from 'react-router-dom';

// import Logo from '../../assets/images/logo.png';
import Logo from '../../assets/images/logo-wide.png';

import { Navbar, Nav } from 'react-bootstrap';

import Auth from '../../utils/auth';

function Header() {
	const logout = () => {
		Auth.logout();
	};

	return (
		<header>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand>
					<Nav.Link as={Link} to="/">
						<img className="logo img my-4 ml-4" src={Logo} alt="Mozz Pizza Glengarriff" />
					</Nav.Link>
				</Navbar.Brand>
				
				<div className="header-text">
					<span>
						Neopolitan Pizza Kitchen<br />
						<a href="tel:+3532763905">+353 27 63905</a>
					</span>
				</div>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link as={Link} to="/menu">Menu</Nav.Link>
						{Auth.loggedIn() ? (
							<>
							<Nav.Link as={Link} to="/admin">Dashboard</Nav.Link>
							<Nav.Link onClick={logout} as={Link} to="/">Logout</Nav.Link>
							{/* <a className="nav-link" onClick={logout} href="/">Logout</a> */}
							</>
						) : null}
						{/* <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}

export default Header;