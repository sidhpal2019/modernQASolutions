import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { LogoLink, NavLink as HeaderNavLink, PrimaryLink as HeaderPrimaryLink } from "components/headers/light.js";
import logo from "images/logo.svg";

const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    // close dropdown on navigation
    setOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
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
        <div tw="flex-1 flex items-center justify-end lg:flex-nowrap lg:space-x-6 relative" ref={ref}>
          <div tw="flex items-center space-x-6">
            <div tw="relative inline-flex">
              <HeaderNavLink as="button" onClick={() => setOpen(v => !v)} tw="inline-flex items-center">
                Products
              </HeaderNavLink>
              {open && (
                <div tw="absolute right-0 mt-2 bg-white border rounded shadow-lg z-50 flex flex-col">
                  <HeaderNavLink as={Link} to="/products/swiftapi" tw="mt-0 mr-0 border-0 text-left px-4 py-2">
                    SwiftAPI
                  </HeaderNavLink>
                  <HeaderNavLink as={Link} to="/products/mobileorbit" tw="mt-0 mr-0 border-0 text-left px-4 py-2">
                    MobileOrbit
                  </HeaderNavLink>
                </div>
              )}
            </div>

            <HeaderNavLink target="_blank" href="https://owaiskhan.me" tw="inline-flex items-center">
              Who we are ?
            </HeaderNavLink>
          </div>

          <div tw="ml-6">
            <HeaderPrimaryLink target="_blank" href="https://gum.co/QaruQ" tw="inline-flex items-center">
              Download Now
            </HeaderPrimaryLink>
          </div>
        </div>
      </NavRow>
    </div>
  );
}
