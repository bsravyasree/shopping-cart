import { useState, useContext } from "react";
import { Button, Card, Image, InputNumber, Rate } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartState } from "../../context/context";

function Product({prod}) {
  const [quantity, setQuantity] = useState(1);
  const width = 200, height = 200;
  const {addItem, removeItem, state} = CartState();

  return (
    <>
      <Card
            hoverable
            cover={
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        src={prod?.image  || ''}
                        preview={false}
                        style={{ width: `${width}px`, height: `${height}px` }}
                    />
              </div>
            }
          >
            <Card.Meta title={prod?.title} />
            <div className="product-meta">
              <Rate disabled defaultValue={prod?.rating?.rate} />
              <span style={{ marginRight: 10 }}>Price: {prod?.price}</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: 10 }}>Quantity:</span>
                <InputNumber
                min={1}
                value={quantity}
                onChange={() => setQuantity(quantity + 1)}
              />
              </div>
              {state.cartItems?.some(p => p.id === prod.id) ? (
                 <Button type="primary"  danger onClick={() => removeItem({ ...prod })}>
                 <ShoppingCartOutlined /> Remove from cart
               </Button>
              ): (
                <Button type="primary"  onClick={() => addItem({ ...prod, quantity: 1 })}>
                <ShoppingCartOutlined /> Add to cart
              </Button>
              )}
             
            </div>
          </Card>
    </>
  );
}

export default Product;
