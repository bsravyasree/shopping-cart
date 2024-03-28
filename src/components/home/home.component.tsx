import Filters from "../filters/filters.component";
import Products from "../products/products.component";


const Home = () => {
    return (
        <>
        <div className="app-content">
            <div className="app-sidebar">
                <Filters />
              </div>
              <div className="product-container">
                <Products/>
              </div>
        </div>
        </>
    );
};

export default Home;