import { CartState } from "../../context/context";
import Product from "../product/product.component";

const Cart = () => {
    const {state} = CartState();
    return (
        <>
        <div className="app-content">
              <div className="product-container">
              {state?.cartItems?.map((prod, index) => (
                   <Product
                         prod={prod}
              key={index+1}
            />
          ))}
              </div>
        </div>
         
        </>
      );
};

export default Cart;