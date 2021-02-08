import logo from './logo.svg';
import './App.css';
import { Nav, Navbar } from "react-bootstrap";
import Home from "./home";
import Camera from "./camera";
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">SmartHome</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to="/camera">Camera</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/camera" component={Camera}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
