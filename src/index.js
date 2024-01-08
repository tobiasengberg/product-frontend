import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductsList from "./pages/ProductsList";
import ShoppingCart from "./pages/ShoppingCart";
import ProductsSidebar from "./components/ProductsSidebar";
import PowerTools from "./pages/PowerTools";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/products",
                element: <ProductsSidebar />,
                children: [
                    {
                        path: "overview",
                        element: <ProductsList />
                    },
                    {
                        path: "powertools",
                        element: <PowerTools />
                    }

                ]

            },
            {
                path: "/shoppingcart",
                element: <ShoppingCart />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

);


