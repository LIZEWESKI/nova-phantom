import React from 'react'
import { Outlet } from 'react-router'
import { ThemeProvider } from "@/components/ThemeProvider"

const Layout = () => {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className='flex flex-col h-screen w-full min-h-screen '>
            {/* <header>This goes our little header</header> */}
            {/* <main className='flex flex-col flex-grow'> */}
                <Outlet/>
            {/* </main> */}
            {/* <footer>This goes our little footer</footer> */}
        </div>
    </ThemeProvider>
    </>
  )
}

export default Layout