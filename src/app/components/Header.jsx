'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import logo from '../assets/FlapsTen/logoIcon.svg'
import Image from 'next/image';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true); 
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-[#1F2937]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
        <div className="text-white text-2xl font-bold">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo icon"/>
          </Link>
        </div>

        <div className="hidden md:flex ml-auto space-x-8 items-center text-white text-md">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/features" className="hover:text-gray-300 transition">
            Features
          </Link>
          <Link href="/blog" className="hover:text-gray-300 transition">
            Blog
          </Link>

          <Link href="/" className="bg-gray-900  text-white px-6 py-3 text-sm rounded-lg shadow-lg hover:bg-gray-950 transition">
            Download Now →
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#1F2937] text-white transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out w-64 md:hidden`}
      >
        <button
          type="button"
          className="text-white absolute top-4 right-4"
          onClick={toggleMobileMenu}
        >
          ✕
        </button>
        <div className="flex flex-col space-y-4 mt-16 px-4">
          <Link href="/" className="text-white text-sm py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link href="/features" className="text-white text-sm py-2 hover:bg-gray-700">
            Features
          </Link>
          <Link href="/blog" className="text-white text-sm py-2 hover:bg-gray-700">
            Blog
          </Link>
          <Link
            href="/"
            className="bg-[#262c47] text-white text-sm py-2 px-4 rounded-lg mt-4"
          >
            Download Now →
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
