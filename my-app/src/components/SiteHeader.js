import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import tw from "twin.macro";
import { LogoLink, NavLink as HeaderNavLink } from "components/headers/light.js";
import logo from "images/logo.svg";

const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    // close dropdown on navigation
    setOpen(false);
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div tw="max-w-screen-2xl mx-auto px-8 py-4">
      <NavRow>
        <LogoLink href="/" tw="mr-6">
          <img src={logo} alt="" />
          Modern QA Solutions
        </LogoLink>
        
        {/* Desktop Navigation - Centered */}
        <div tw="hidden lg:flex flex-1 items-center justify-center" ref={ref}>
          <HeaderNavLink as="button" onClick={() => setOpen(v => !v)} tw="lg:mx-6 lg:my-0" style={{position: 'relative'}}>
            Products
            {open && (
              <div tw="absolute right-0 mt-2 bg-white border rounded shadow-lg z-50 flex flex-col" style={{top: '100%'}}>
                <HeaderNavLink as={Link} to="/products/swiftapi" tw="mt-0 mr-0 border-0 text-left px-4 py-2">       
                  SwiftAPI
                </HeaderNavLink>
                <HeaderNavLink as={Link} to="/products/mobileorbit" tw="mt-0 mr-0 border-0 text-left px-4 py-2">    
                  MobileOrbit
                </HeaderNavLink>
              </div>
            )}
          </HeaderNavLink>

          <HeaderNavLink as={Link} to="/who-we-are" tw="lg:mx-6 lg:my-0">
            Who we are ?
          </HeaderNavLink>
        </div>

        {/* Mobile Navigation Button */}
        <button tw="lg:hidden p-2" onClick={() => setMobileOpen(v => !v)}>
          <svg tw="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Navigation Menu */}
        {mobileOpen && (
          <div tw="lg:hidden absolute right-0 mt-2 bg-white border rounded shadow-lg z-50 flex flex-col w-48" style={{top: '100%'}}>
            <div tw="relative">
              <HeaderNavLink as="button" onClick={() => setOpen(v => !v)} tw="inline-flex items-center w-full text-left px-4 py-2">
                Products
              </HeaderNavLink>
              {open && (
                <div tw="bg-gray-100 flex flex-col">
                  <HeaderNavLink as={Link} to="/products/swiftapi" tw="mt-0 mr-0 border-0 text-left px-6 py-2">       
                    SwiftAPI
                  </HeaderNavLink>
                  <HeaderNavLink as={Link} to="/products/mobileorbit" tw="mt-0 mr-0 border-0 text-left px-6 py-2">    
                    MobileOrbit
                  </HeaderNavLink>
                </div>
              )}
            </div>
            <HeaderNavLink as={Link} to="/who-we-are" tw="inline-flex items-center px-4 py-2">
              Who we are ?
            </HeaderNavLink>
          </div>
        )}
      </NavRow>
    </div>
  );
}
