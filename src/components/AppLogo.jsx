import React from "react";
import Logo from "@/assets/logo.png"; // Adjust the path as necessary
const AppLogo = () => {
  return (
    <div className="w-8 h-auto">
      <img src={Logo} alt="Logo" />
    </div>
  );
};

export default AppLogo;
