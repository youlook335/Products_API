import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const ShoppingAPI = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Fake Store API
      .then((response) => response.json())
      .then((json) => {
        const additionalProducts = [
        //   { id: 21, title: "Cooking Oil", price: 5, image: "https://cdn.pixabay.com/photo/2016/11/22/19/41/olive-oil-1851403_1280.jpg" },
        //   { id: 22, title: "Detergent", price: 3, image: "https://cdn.pixabay.com/photo/2017/07/08/17/15/detergent-2484084_1280.jpg" },
        //   { id: 23, title: "Soap", price: 2, image: "https://cdn.pixabay.com/photo/2016/07/21/14/40/soap-1533540_1280.jpg" }
        ];
        setProducts([...json.slice(0, 15), ...additionalProducts]); // Total 18 products
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setSelectedProduct(product);
  };

  const handleCheckout = () => {
    setCheckout(true);
  };

  const placeOrder = (event) => {
    event.preventDefault();
    setOrderPlaced(true);
    setCart([]);
    setCheckout(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Shopping Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <img src={product.image} alt={product.title} className="card-img-top" style={{ height: "200px", objectFit: "contain" }} />
              <div className="card-body">
                <h5>{product.title}</h5>
                <p>${product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center mt-4">Shopping Cart</h2>
      <div className="container">
        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => (
              <p key={index}>{item.title} - ${item.price}</p>
            ))}
            <p><strong>Total:</strong> ${cart.reduce((total, item) => total + item.price, 0) * 0.9} (10% Discount Applied)</p>
            <button className="btn btn-success" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>

      {checkout && (
        <div className="container mt-4">
          <h2 className="text-center">Checkout Form</h2>
          <form onSubmit={placeOrder} className="w-50 mx-auto p-3 border rounded">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-success w-100">Place Order</button>
          </form>
        </div>
      )}

      {orderPlaced && (
        <div className="alert alert-success text-center mt-4">Order Placed Successfully!</div>
      )}

      {selectedProduct && (
        <Modal show={selectedProduct !== null} onHide={() => setSelectedProduct(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <img src={selectedProduct.image} alt={selectedProduct.title} className="img-fluid" style={{ maxHeight: "250px" }} />
            </div>
            <p className="mt-3"><strong>Price:</strong> ${selectedProduct.price}</p>
            <p><strong>Warranty:</strong> 1 Year Manufacturer Warranty</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedProduct(null)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ShoppingAPI;
