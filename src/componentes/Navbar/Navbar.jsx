import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"


const Navbar_Nav = () =>{
    return(
    <>
       <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MF Tecnologia</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Matherboarts</Nav.Link>
                <Nav.Link href="">Preocesadores</Nav.Link>
                <Nav.Link href="">Accesarios</Nav.Link>
                <Nav.Link href="">Contacto</Nav.Link>
            </Nav>
          <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}

export default Navbar_Nav