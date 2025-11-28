import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Error404 from "../pages/Error404/Error404"; // <-- import your component
import AboutUs from "../pages/AboutUs/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import { register } from "swiper/element";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },

      // ✅ Catch-all 404 route inside children
      {
        path: "*",
        Component: Error404, // <-- FIX: use Component, not element
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login

      },
      {
        path: 'register',
        Component: Register
      }
    ]
  }
]);
