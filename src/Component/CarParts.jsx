import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CarParts = () => {
  // 🏁 Car Parts Data (Including Fuel Pump)
  const carPartsData = [
    { id: 1, title: "Brake Pads", price: 25.99, image: "https://tse1.mm.bing.net/th?id=OIP.LDxqkcIqz5_ZuVfc0e8MWgHaGG&pid=Api&P=0&h=220" },
    { id: 2, title: "Car Battery", price: 89.99, image: "https://i5.walmartimages.com/asr/70920945-75be-4e8a-9c22-be5bda4bf3df.ee5b00e7190cb2e21d6144df88f7a5e7.jpeg" },
    { id: 3, title: "Engine Oil", price: 39.99, image: "https://www.supercheapauto.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw0d810715/images/126858/SCA_126858_hi-res.jpg?sw=1000&sh=1000&sm=fit" },
    { id: 4, title: "Air Filter", price: 15.49, image: "https://tse2.mm.bing.net/th?id=OIP.Jr7PohFfjYgRc_Qe9cfQswHaHa&pid=Api&P=0&h=220" },
    { id: 5, title: "Spark Plugs", price: 12.99, image: "https://tse1.mm.bing.net/th?id=OIP.tQW9bd0DVaHVP7Bw4gByxwHaHV&pid=Api&P=0&h=220" },
    { id: 6, title: "Car Tire", price: 129.99, image: "https://tse4.mm.bing.net/th?id=OIP.e6u9VThsmXkJbNnVpB82oQHaE_&pid=Api&P=0&h=220" },
    { id: 7, title: "Radiator", price: 249.99, image: "https://tse3.mm.bing.net/th?id=OIP.MwrFIzTiIfNv9B0F87wWBAHaE8&pid=Api&P=0&h=220" },
    { id: 8, title: "Headlights", price: 49.99, image: "https://tse4.mm.bing.net/th?id=OIP.yCpQ3XtGWwAN-ruYi5yXWgHaE7&pid=Api&P=0&h=220" },
    { id: 9, title: "Fuel Pump", price: 99.99, image: "https://tse1.mm.bing.net/th?id=OIP.U02EGRWN775mUerwGXVClgHaHa&pid=Api&P=0&h=220" }, // New Part Added
  ];

  const [cart, setCart] = useState([]);

  // 🛒 Add to Cart Function
  const addToCart = (part) => {
    setCart([...cart, part]);
  };

  return (
    <div className="container mt-4">
      {/* Heading */}
      <h2 className="text-center mb-4">🚗 Car Parts Store</h2>

      {/* Products Section */}
      <div className="row">
        {carPartsData.map((part) => (
          <div key={part.id} className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <img src={part.image} alt={part.title} className="card-img-top" style={{ height: "150px", objectFit: "contain" }} />
              <div className="card-body">
                <h5>{part.title}</h5>
                <p>💲 {part.price}</p>
                <button className="btn btn-success" onClick={() => addToCart(part)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <h3 className="text-center mt-4">🛒 Shopping Cart</h3>
      {cart.length === 0 ? (
        <p className="text-center">Cart is empty</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              {item.title} - 💲{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarParts;
