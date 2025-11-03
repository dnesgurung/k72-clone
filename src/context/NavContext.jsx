import React, { createContext, useState } from "react";

const NavContext = ({ children }) => {
  const NavbarContext = createContext();
  const [navOpen, setnavOpen] = useState(false)
  return (
    <div>
      <NavbarContext.provider>{children}</NavbarContext.provider>
    </div>
  );
};

export default NavContext;
