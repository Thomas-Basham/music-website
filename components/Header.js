import Link from "next/link";
import { FaInstagram, FaYoutube, FaSpotify, FaItunes } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import Logo from "../public/images/Logo.png";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-bootstrap";
import { RiArrowDownSFill } from "react-icons/ri";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="mb-48 bg-black border-green-400 w-100vw">
      <Navbar bg="black" expand="lg" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
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
              <div className="flex flex-col items-center link-container align-center">
                <RiArrowDownSFill
                  className="arrow-icon"
                  color="white"
                  fontSize={90}
                  style={
                    router.pathname == "/music"
                      ? { display: "flex", position: "absolute", top: "-35px" }
                      : { display: "none" }
                  }
                />
                <Nav.Link href="/music" className="items-center d-flex">
                  {" "}
                  <BiDotsVerticalRounded className="menu-dots " /> MUSIC
                </Nav.Link>
              </div>

              <div className="flex flex-col items-center link-container align-center">
                <RiArrowDownSFill
                  className="arrow-icon"
                  color="white"
                  fontSize={90}
                  style={
                    router.pathname == "/videos"
                      ? { display: "flex", position: "absolute", top: "-35px" }
                      : { display: "none" }
                  }
                />

                <Nav.Link href="/videos" className="items-center d-flex">
                  {" "}
                  <BiDotsVerticalRounded className="menu-dots" /> VIDEOS
                </Nav.Link>
              </div>

              <div className="flex flex-col items-center link-container align-center">
                <RiArrowDownSFill
                  className="arrow-icon"
                  color="white"
                  fontSize={90}
                  style={
                    router.pathname == "/news"
                      ? { display: "flex", position: "absolute", top: "-35px" }
                      : { display: "none" }
                  }
                />

                <Nav.Link href="/news" className="items-center d-flex">
                  {" "}
                  <BiDotsVerticalRounded className="menu-dots" /> NEWS
                </Nav.Link>
              </div>

              <div className="flex flex-col items-center link-container align-center">
                <RiArrowDownSFill
                  className="arrow-icon"
                  color="white"
                  fontSize={90}
                  style={
                    router.pathname == "/bio"
                      ? { display: "flex", position: "absolute", top: "-35px" }
                      : { display: "none" }
                  }
                />

                <Nav.Link href="/bio" className="items-center d-flex">
                  {" "}
                  <BiDotsVerticalRounded className="menu-dots" /> BIO
                </Nav.Link>
              </div>
            </Nav>

            <nav className="flex items-center justify-around w-64">
              <NavLink
                href="https://www.instagram.com/tommyybasham"
                target={"_blank"}
              >
                <AiFillInstagram />
              </NavLink>

              <NavLink
                href="https://www.youtube.com/channel/UCLYKTC2tLKbS_zZFCwCIwDg/featured"
                target={"_blank"}
              >
                <FaYoutube />
              </NavLink>

              <NavLink
                href="https://open.spotify.com/artist/7fVW0REbd7DTaQCKgXBbHm?si=ZNcWQkGXTSiv0kbEZRSFKg"
                target={"_blank"}
              >
                <FaSpotify />
              </NavLink>

              <NavLink
                href="https://music.apple.com/us/artist/tommy-basham/1522008646"
                target={"_blank"}
              >
                <FaItunes />
              </NavLink>
            </nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
