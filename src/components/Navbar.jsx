import { Button, Navbar } from "flowbite-react";
import Logo from '../assets/Logo.png';
export function Nav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand >
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <img src={Logo} alt="" height={20} width={97} />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span> */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdn-nYChP2cwu4UBoUvDLw4DjCcmD1INi0miLejTlu3V6zHgw/viewform" target="_blank">Register</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" >
          Home
        </Navbar.Link>
      
        <Navbar.Link href="#about">About</Navbar.Link>
        <Navbar.Link href="#course">Course</Navbar.Link>
        <Navbar.Link href="#contact_me">Contact me</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}