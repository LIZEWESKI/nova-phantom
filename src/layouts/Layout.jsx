import React from "react";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";

const Layout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex min-h-[100dvh] flex-col justify-center items-center">
        <Header />
        {/* <main className='flex flex-col flex-grow'> */}
        <Outlet />
        {/* </main> */}
        <Footer />
        </div>
     
    </ThemeProvider>
  );
};

export default Layout;
