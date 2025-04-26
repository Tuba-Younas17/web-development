import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div>NavBar</div>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </>
  );
};

export default NavBar;
