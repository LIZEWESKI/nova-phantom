import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";
const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const htmlElement = document.documentElement;
    const lang = i18n.language;
    htmlElement.lang = i18n.language;
    htmlElement.classList.add("scroll-smooth");

    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    htmlElement.setAttribute("dir", dir);

  }, [i18n.language]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path='quiz' element={<Quiz/>} errorElement={<ErrorElement/>}/> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
