import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Product.css";

const Presenter = () => {
  const history = useNavigate();
  const product = {
    name: "Intelligent Plastic Tuna",
    image: "http://placeimg.com/640/480/fashion",
    price: "493.00",
    catagory: "Concrete",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    brand: "Rustic Steel Chicken",
    numReviews: 9,
    id: "1",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "black",
    color: "gold",
    // border: "2px solid #000",
    // boxShadow: 24,
    filter: "drop-shadow(0px 2px 8px gold)",
    p: 4,
  };

  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  let userDetails = JSON.parse(localStorage.getItem("userLogIn"));
  const userId = userDetails._id;

  const [quantity, setQuantity] = useState();

  return (
    <div>
      <Link to="/HomePage">
        {" "}
        <IconButton>
          <KeyboardBackspaceRoundedIcon fontSize="large" />
        </IconButton>
      </Link>
      <div className="row top">
        <div className="col-2">
          <img src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul className="details">
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              {/* <Rating rating={product.rating} numReviews={product.numReviews} /> */}
            </li>
            <li>price: ₹{product.price}</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  {/* <div className="price">₹{product.price * quantity}</div> */}
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>

              {product.countInStock > 0 ? (
                <li>
                  <div className="row">
                    <div>Quantity</div>
                    <div>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x}>
                            {x}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </li>
              ) : (
                ""
              )}

              <div>
                {product.countInStock > 0 ? (
                  <li>
                    <button className="primary">Add To Cart</button>
                  </li>
                ) : (
                  ""
                )}
              </div>
              <div>
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <div className="modal-Box">
                      <Box sx={style}>
                        <div>
                          <h1 style={{ textAlign: "center" }}>
                            Happy Shopping
                          </h1>
                          <h1 style={{ textAlign: "center" }}>
                            {product.name} Added To Cart
                          </h1>
                        </div>

                        <div className="row">
                          <button
                            className=" modalButton"
                            onClick={() => {
                              history.push("/homePage");
                            }}
                          >
                            Continue Shopping
                          </button>

                          <button
                            className=" modalButton"
                            onClick={() => {
                              history.push(`/cart/${userId}`);
                            }}
                          >
                            To CheckOut
                          </button>
                        </div>
                      </Box>
                    </div>
                  </Modal>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presenter;
