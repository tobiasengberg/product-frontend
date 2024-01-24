
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductsSidebar from "./components/ProductsSidebar";
import ProductsList from "./pages/ProductsList";
import PowerTools from "./pages/PowerTools";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import {localstorage} from "./helper/localstorage";

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
                            loader: () => axios.get("/products.json").then(result =>  result.data),
                        },
                        {
                            path: "powertools",
                            element: <PowerTools />
                        },
                        {
                            path: ":productId",
                            element: <Product setShopping={setShopping} shopping={shopping}/>,
                            loader: () => axios.get("/products.json").then(result =>  result.data),
                        }

                    ]

                },
                {
                    path: "/shoppingcart",
                    element: <ShoppingCart shopping={shopping} setShopping={setShopping}/>
                }
            ]
        }
    ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
