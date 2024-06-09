

import { Button, Navbar } from "flowbite-react";

export function Nav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Logo or name</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Register</Button>
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
