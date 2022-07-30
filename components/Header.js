import Link from "next/link";
import { FaInstagram, FaYoutube, FaSpotify, FaItunes } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-bootstrap";
import { RiArrowDownSFill } from "react-icons/ri";

export default function Header() {
  return (
    <header className="bg-black w-100vw border-green-400">
      <Navbar bg="black" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/index">
            <Image
              src={Logo}
              alt="Logo"
              height={150}
              width={300}
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="link-container flex flex-col align-center items-center">
                <RiArrowDownSFill
                  className="arrow-icon"
                  color="white"
                  fontSize={80}
                  style={{ display: "none" }}
                />
                <Nav.Link href="/music" className="d-flex items-center">
                  {" "}
                  <BiDotsVerticalRounded className="menu-dots " /> MUSIC
                </Nav.Link>
              </div>

              <div className="link-container flex flex-col align-center items-center">
                <RiArrowDownSFill
                  className="arrow-icon"
                  color="white"
                  fontSize={80}
                  style={{ display: "none" }}
                />

                <Nav.Link href="/about" className="d-flex items-center">
                  {" "}
                  <BiDotsVerticalRounded className="menu-dots" /> ABOUT
                </Nav.Link>
              </div>

              <div className="link-container flex flex-col align-center items-center">
                <RiArrowDownSFill
                  className="arrow-icon"
                  color="white"
                  fontSize={80}
                  style={{ display: "none" }}
                />

                <Nav.Link href="/news" className="d-flex items-center">
                  {" "}
                  <BiDotsVerticalRounded className="menu-dots" /> NEWS
                </Nav.Link>
              </div>
            </Nav>

            <nav className="w-64 flex items-center justify-around">
              <NavLink>
                <AiFillInstagram />
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
