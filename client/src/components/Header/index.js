import Logo from '../../assets/images/logo.png';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">
					<Nav.Link as={Link} to="/">
					<img src={Logo} alt="Mozz Pizza Glengarriff" />
					</Nav.Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link as={Link} to="/menu">Menu</Nav.Link>
						<Nav.Link as={Link} to="/contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}

export default Header;