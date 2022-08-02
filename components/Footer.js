import Link from "next/link";
import { FaInstagram, FaYoutube, FaSpotify, FaItunes } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import LogoIcon from "../public/images/Logo-icon.png";

import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-bootstrap";
import { RiArrowDownSFill } from "react-icons/ri";
import MailchimpSubscribe from "react-mailchimp-subscribe";
export default function Footer() {
  const url = process.env.NEXT_PUBLIC_MAIL_CHIMP_URL;

  
  // simplest form (only email)
  const SimpleForm = () => <MailchimpSubscribe url={url} />;

  // use the render prop and your custom form
  const CustomForm = () => (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div className="my-6" style={{ position: "relative", left: "20px" }}>
          <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
          {status === "sending" && (
            <div style={{ color: "blue" }}>sending...</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div style={{ color: "green" }}>Subscribed !</div>
          )}
        </div>
      )}
    />
  );

  return (
    <footer className="text-center position-relative" >
      <Image
        className="border-white rounded-full"
        src={LogoIcon}
        alt="tommy basham logo"
        width={150}
        height={150}
      />

      <CustomForm />

      <Navbar bg="none" expand="lg" variant="dark"  />
      <nav className="flex items-center justify-around w-64 ">
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
      <p className="mt-6 text-slate-400">
        <span className="person">ALL CONTENT COPYRIGHT. © Tommy Basham</span>
        <span className="copyright-divider"> | </span>
        <span className="year">2022. ALL RIGHTS RESERVED. </span>
      </p>
    </footer>
  );
}
