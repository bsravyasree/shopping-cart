// import { ProductOutlined, ShoppingCartOutlined } from "@ant-design/icons";
// import { Badge, Button } from "antd";
import { ProductOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { CartState } from "../../context/context";

function NavHeader() {
   const {state} = CartState();
    return (
      <div className="nav-header">
        <Header style={{ padding: 0, width: "100%" }}>
          <nav className="nav-container">
            <h2 className="logo" style={{ margin: 0}}>
                Shopping Cart
            </h2>
            <Link to={'/home'}>
                <Button type="primary">
                <ProductOutlined /> Home Page
                </Button>
           </Link>
           <Link to={'/cart'}>
           <Badge count={state?.cartItems.length} overflowCount={10}>
                <Button type="primary">Cart</Button>
           </Badge>
           </Link>
          </nav>
        </Header>
      </div>
    );
  }
  
export default NavHeader;
