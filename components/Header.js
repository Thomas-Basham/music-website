import Link from "next/link";
import { FaInstagram, FaYoutube, FaSpotify, FaItunes } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-bootstrap";
export default function Header() {
  return (
    <header className="bg-black w-100vw border-green-400">
      <Navbar bg="black" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">
            {" "}
            <Image src={Logo} alt="Logo" height={150} width={300} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/music">MUSIC</Nav.Link>
              <Nav.Link href="/about">ABOUT</Nav.Link>
              <Nav.Link href="/news">NEWS</Nav.Link>


            </Nav>

            <nav className="w-64 flex items-center justify-around">
              <NavLink>
                <FaInstagram />
              </NavLink>

              <NavLink>
                <FaYoutube />
              </NavLink>

              <NavLink>
                <FaSpotify />
              </NavLink>

              <NavLink>
                <FaItunes />
              </NavLink>
            </nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
