"use client"

import React from "react"
import Nav from "./Nav"
import Logo from "./Logo"
import MobileSidebar from "./MobileSidebar"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center w-full h-16 pl-5 z-50 transition-all duration-500 shadow-md">
      <div className="flex items-center justify-between">
        {/* logo */}
        <Logo />
        <div className="flex items-center ml:auto">
          <div className="lg:hidden pl-2">
            {/* mobile nav */}
            <MobileSidebar />
          </div>
        </div>
      </div>
      {/* nav */}
      <Nav />
    </header>
  )
}

export default Header
