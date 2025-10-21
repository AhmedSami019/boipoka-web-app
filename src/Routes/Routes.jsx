import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home/Home';
import Root from '../Pages/Root/Root';

export const router = createBrowserRouter([
    {
        path: "/",
        component: Root,
        children: [
            {
                index: true, 
                path: "/",
                component: Home
            }
        ]
    }
])