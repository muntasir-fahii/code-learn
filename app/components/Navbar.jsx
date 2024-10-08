import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "../public/logo-code.jpeg";

const Navbar = () => {
  return (
    <nav>
      <div class="navbar wrapper">
        <div class="logo-content">
          <Image src={HeroImage} alt="hero-img" height={50} width={50} />
          <Link href="/" class="logo">
            CodeLearn
          </Link>
        </div>
        <ul class="nav-links">
          <li>Home</li>
          <li>Course</li>
          <li>About us</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div class="nav-btn">
          <Link href="/" class="bg-[#EAE34A] px-4 py-[10px]">
            Login
          </Link>
          <Link href="/" class="bg-[#37266F] px-4 py-[10px] text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
