import React from "react";
import Movies from "../pages/movies/movies";
import About from "../pages/about/about";
import Profile from "../pages/profile";

export const userRoutes = [
    {
        name:'movies',
        text:'Movies',
        path:'/',
        element:<Movies />,
    },
    {
        name:'movies',
        text:'Movies',
        path:'/movies',
        element:<Movies />,
    },
    
    {
        name:'about',
        text:'About',
        path:'/about',
        element:<About />,
    },
]
export const adminRoutes = [
    {
        name:'profile',
        text:'Profile',
        path:'/profile',
        element:<Profile />,
    }
]