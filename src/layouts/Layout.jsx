import React from "react";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const Layout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="h-screen w-full min-h-screen">
        <Header />
        <main className='flex flex-col flex-grow w-full'>
          <Outlet />
        </main>
        <Footer />
        </div>
     
    </ThemeProvider>
  );
};

export default Layout;
