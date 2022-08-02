import Link from "next/link";
import { FaInstagram, FaYoutube, FaSpotify, FaItunes } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../public/images/logo-icon.png";
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
        <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
      )}
    />
  );

  return (
    <footer className="text-center position-relative">
      <Image
        className="border-white rounded-full"
        src={logo}
        alt="tommy basham logo"
        width={150}
        height={150}
      />

      <div className=" form-holder" style={{ position: "relative", margin: "0 auto", }}>
        <CustomForm />
      </div>
      <Navbar bg="none" expand="lg" variant="dark" />
      <nav className="flex items-center justify-around w-64 ">
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
      <p className="mt-6 text-slate-400">
        <span className="person">ALL CONTENT COPYRIGHT. © Tommy Basham</span>
        <span className="copyright-divider"> | </span>
        <span className="year">2022. ALL RIGHTS RESERVED. </span>
      </p>
    </footer>
  );
}
