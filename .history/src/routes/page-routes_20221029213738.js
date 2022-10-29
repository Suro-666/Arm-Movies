import React from "react";
import Profile from "../pages/profile";
import About from "../pages/about";
import Movies from "../pages/movies";
import SignIn from "../components/sign-in/sign-in";
import SignUp from "../components/sign-up/sign-up";

export const routes = {
    guestRoutes: [
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
        {
            name: "signUp",
            text: "SignUP",
            path: "/sign-up",
            element: <SignUp />,
        },
    ],

    privateRoutes: [
        {
            name: "profile",
            text: "Profile",
            path: "/profile/:id",
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
    ],
    
    routesForNavigation: [
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
    ],
};
