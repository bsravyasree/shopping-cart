import { useState, useEffect } from "react";
import Product from "../product/product.component";
import { CartState } from "../../context/context";

// function Products({addItem}) {
function Products() {
  const [products, setProducts] = useState([]);

  const {
    productState: { byCategory, byRating },
  } = CartState();

  const filterProducts = () => {
    let sortedProducts = products;

    if (byCategory?.length) {
      sortedProducts = sortedProducts.filter((prod)=> byCategory.includes(prod?.category));
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating.rate >= byRating
      );
    }

    return sortedProducts;
  };

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <>
      {filterProducts().map((prod, index) => (
        <Product
          prod={prod}
          key={index+1}
        />
      ))}
    </>
  );
}

export default Products;
