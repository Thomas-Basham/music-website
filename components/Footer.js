import Link from "next/link";
import {FaInstagram, FaYoutube, FaSpotify, FaItunes} from 'react-icons/fa'
import Logo from '../assets/Logo.png'
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Header() {
  return (
<header  className="bg-black w-100vw border-green-400">
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Tommy Basham</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Connect" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>

    //     <Image
    //       src={Logo}
    //       alt="Logo"
    //       width={412}
    //       // style={{ width: "512px"}}
    //       // priority
    //     />


          
    //     <nav className="w-64 flex items-center justify-around">

    //       <FaInstagram/>
    //       <FaYoutube/>
    //       <FaSpotify/>
    //       <FaItunes/>
    //     </nav>
  );
}
