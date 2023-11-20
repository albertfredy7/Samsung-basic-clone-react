import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container style={{height:'56px'}}>
        <Navbar.Brand href="#home" className='me-5'><img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/gnb-desktop-120x32.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='nav-items'>Shop</Nav.Link>
            <Nav.Link href="#pricing" className='nav-items'>Mobile</Nav.Link>
            <Nav.Link href="#pricing" className='nav-items'>TV & AV</Nav.Link>
            <Nav.Link href="#pricing" className='nav-items'>Home Appliances</Nav.Link>
            <Nav.Link href="#pricing" className='nav-items'>Laptop & Monitors</Nav.Link>
            <Nav.Link href="#pricing" className='nav-items'>Displays</Nav.Link>
            <Nav.Link href="#pricing" className='nav-items'>Accessories</Nav.Link>
            <Nav.Link href="#pricing" className='nav-items'>SmartThings</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='nav-items'>Support</Nav.Link>
            <Nav.Link href="#deets" className='me-3 nav-items'>For Business</Nav.Link>
            <Nav.Link href="#deets"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
            <Nav.Link href="#deets"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
            <Nav.Link href="#deets"><i class="fa-regular fa-user"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header