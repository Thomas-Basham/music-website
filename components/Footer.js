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
export default function Footer() {
  return (
    <footer >
      <Navbar  bg="black" expand="lg" variant="dark" fixed="bottom" />
      <nav className="w-64 flex items-center justify-around ">
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
    </footer>
  );
}
