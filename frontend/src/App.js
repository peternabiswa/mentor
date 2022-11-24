import "./App.css";
import { ReactComponent as IconButton } from "./Assets/images/icon-cart.svg";
//import  MobileImage from "./Assets/images/image-product-mobile.jpg";
import DesktopImage from "./Assets/images/image-product-desktop.jpg";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="pic">
          <img
            className="desktop"
            src={DesktopImage}
            alt="Bottle of Gabrielle Channel perfume"
          />
        </div>
        <div className="description">
          <h3>PERFUME</h3>
          <h1>Gabrielle Essence Eau De Parfum</h1>

          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <>
            <strong>$149.99 </strong>
            <small>$169.99</small>
          </>
          <br></br>

          <button className="checkoutButton">
            <IconButton width="1rem" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
