
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductsSidebar from "./components/ProductsSidebar";
import ProductsList, {productsLoader} from "./pages/ProductsList";
import Category, {categoryLoader} from "./pages/Category";
import Product, {productLoader} from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import {localstorage} from "./helper/localstorage";
import SignIn from "./pages/SignIn";

function App() {

    const [shopping, setShopping] = useState(localstorage?.get('shopping') || []);

    useEffect(() => {
            localstorage?.set('shopping', shopping)
        }, [shopping]
    );


    let cartCounter = shopping
        .reduce((a, b) => a + b.amount, 0);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root counter={cartCounter} />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/products",
                    element: <ProductsSidebar />,
                    children: [
                        {   index: true,
                            element: <ProductsList />,
                            loader: productsLoader,
                        },
                        {
                            path: "category/:categoryName",
                            element: <Category />,
                            loader: categoryLoader,
                        },
                        {
                            path: "product/:productId",
                            element: <Product setShopping={setShopping} shopping={shopping}/>,
                            loader: productLoader,
                        }

                    ]

                },
                {
                    path: "/shoppingcart",
                    element: <ShoppingCart shopping={shopping} setShopping={setShopping}/>
                },
                {
                    path: "/signin",
                    element: <SignIn />
                }
            ]
        }
    ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
