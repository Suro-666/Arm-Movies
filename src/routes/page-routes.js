import React from "react";
import Profile from "../pages/profile/profile";
import About from "../pages/about/about";
import Movies from "../pages/movies/movies";
import SignIn from "../pages/sign-in/sign-in";
import SignUp from "../pages/sign-up/sign-up";
import MoreInfo from "../pages/more-for-movie/more-info";
import Case from "../pages/case/case";

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
        {
            name: "moreInfo",
            text: "MoreInfo",
            path: "/more-info/:movieName",
            element: <MoreInfo />,
        },
    ],

    privateRoutes: [
        {
            name: "profile",
            text: "Profile",
            path: "/profile/:uid",
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
        {
            name: "moreInfo",
            text: "MoreInfo",
            path: "/more-info/:movieName",
            element: <MoreInfo />,
        },
        {
            name: "case",
            text: "Case",
            path: "/case",
            element: <Case />,
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