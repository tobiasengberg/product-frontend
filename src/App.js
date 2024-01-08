
import './App.css';
import React, {useEffect, useState} from "react";
import ProductTable from "./components/ProductTable";
import axios from "axios";

function App() {

  const [products, setProducts] = useState([
      { name: "Mudd",
        description: "Sticks to feets"
      }
  ]);

    useEffect(() => {
        axios.get('/product')
            .then((response) => {
                setProducts(response.data)
            })
    }, []);



  return (
    <div className="App">
        <ProductTable products={products} />
        <button onClick={() => {
            axios.post('/product',
                {
                    name: "Ball",
                    description: "Is bouncy"
                }
                )
                .then((response) => {
                    console.log(response);
                })
        }}>
            Click to add
        </button>

    </div>
  );
}

export default App;
