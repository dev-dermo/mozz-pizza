import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
// import Admin from './pages/Admin';
import Login from './pages/Login';

import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        <Header />
        <Container className="my-5">
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/contact" component={Contact} />
            
            {/* <Route exact path="/admin" component={Admin} /> */}
            <Route exact path="/login" component={Login} />
            
            <Route path="*" render={() => {
              return <h1>404</h1>
            }} />
            {/* <Route exact path="/" component={Home} /> */}
          </Switch>
        </Container>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
