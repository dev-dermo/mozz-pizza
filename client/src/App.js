import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Mozz Pizza</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/" component={Home} /> */}
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
