"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Buttons from "./Buttons";
import Image from "next/image";
import logo from '../assets/FlapsTen/Logo blue.svg'
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    }finally {
      setLoading(false); 
    }
  };

  return (
    <footer
      className="bg-gray-100 px-4 sm:px-8 lg:px-20 text-white py-8 mt-20"
      style={{ marginTop: "0px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-8">
          <div className="w-full md:w-1/2">
            <h4 className="text-lg font-semibold mb-4 text-[#171059] text-center md:text-left">
              Join our newsletter for latest updates
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 text-black rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none w-full sm:w-auto flex-grow mb-2 sm:mb-0"
              />
              <button
                onClick={handleSubmit}
                className="sm:ml-2 px-4 py-2 text-white bg-[#171059] font-semibold rounded-md sm:rounded-r-md sm:rounded-l-none w-full sm:w-auto flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full text-white"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
            <div className="flex mt-4 justify-center md:justify-start space-x-1">
              <Link
                href="https://www.facebook.com/millao247"
                className="text-[#171059] p-1 rounded-full text-3xl"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/millaoinc/profilecard/?igsh=NnNra2R2a2RieHB2"
                className="text-[#171059] p-1 rounded-full text-3xl"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.linkedin.com/company/millao-inc./?viewAsMember=true"
                className="text-[#171059] p-1 rounded-full text-3xl"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
            <Image src={logo} alt="Flaps Tes" color="blue" height={80} width={140} />
            <p className="text-[#171059] text-sm mt-2 text-center md:text-right">
              Download Our App
            </p>
            <div className="flex space-x-4 mt-4">
              <Buttons />
            </div>
          </div>
        </div>

        <hr className="border-[#171059] my-6" />

        <div className="text-center text-md text-[#171059]">
          All rights reserved for Millao RE © 2024
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
}
