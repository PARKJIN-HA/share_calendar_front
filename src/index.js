import React from 'react';
import {createRoot} from 'react-dom/client';
import App from '@/app';
import ErrorPage from '@/error-page';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const domNode = document.getElementById('root');
const root = createRoot(domNode);
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    }
]);


root.render(
    <React.StrictMode>
        <RouterProvider router ={router} />
    </React.StrictMode>
);