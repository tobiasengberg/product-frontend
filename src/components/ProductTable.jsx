import React from 'react';

const ProductTable = ({products}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product, id) =>

                ( <tr key={id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                </tr> )
                )
            }
            </tbody>
        </table>
    );
};

export default ProductTable;