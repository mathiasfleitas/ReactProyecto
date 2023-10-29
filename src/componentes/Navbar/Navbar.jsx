import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom';


const Navbar_Nav = () =>{
    return(
    <>
       <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>MF Tecnologia</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to='/category/Motherboard'>Motherboard</Nav.Link>
                <Nav.Link as={Link} to='/category/Procesadores'>Preocesadores</Nav.Link>
                <Nav.Link as={Link} to='/category/Accesarios'>Accesorios</Nav.Link>
            </Nav>
          <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}

export default Navbar_Nav