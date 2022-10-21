import React from "react";
import Profile from "../pages/profile";
import About from "../pages/about";
import Movies from "../pages/movies";
import SignIn from "../components/sign-in/sign-in";

export const guestRoutes = [
    {
        name: "movies",
        text: "Movies",
        path: "/",
        element: <Movies />,
    },
    {
        name: "movies",
        text: "Movies",
        path: "/movies",
        element: <Movies />,
    },
    {
        name: "about",
        text: "About",
        path: "/about",
        element: <About />,
    },
    {
        name: "signIn",
        text: "SignIn",
        path: "/sign-in",
        element: <SignIn />,
    },
];
export const privateRoutes = [
    {
        name: "profile",
        text: "Profile",
        path: "/profile",
        element: <Profile />,
    },
    {
        name: "movies",
        text: "Movies",
        path: "/",
        element: <Movies />,
    },
    {
        name: "movies",
        text: "Movies",
        path: "/movies",
        element: <Movies />,
    },
    {
        name: "about",
        text: "About",
        path: "/about",
        element: <About />,
    },
];

export const routesForNavigation = [
    {
        name: "movies",
        text: "Movies",
        path: "/",
        element: <Movies />,
    },
    {
        name: "movies",
        text: "Movies",
        path: "/movies",
        element: <Movies />,
    },
    {
        name: "about",
        text: "About",
        path: "/about",
        element: <About />,
    },
];
