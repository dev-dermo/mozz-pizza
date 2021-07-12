// import Logo from '../../assets/images/logo.png';
import Logo from '../../assets/images/logo-wide.png';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">
					<Nav.Link as={Link} to="/">
						<img className="logo img my-4 ml-4" src={Logo} alt="Mozz Pizza Glengarriff" />
						{/* <br />
						<span id="logo-text">Neopolitan Pizza</span> */}
					</Nav.Link>
				</Navbar.Brand>
				
				<Nav class="header-text">
					<span>
						Neopolitan Pizza Kitchen<br />
						<a href="tel:+3532763905">+353 (27) 63905</a>
					</span>
				</Nav>

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