import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "../components/ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const handleAddToCart = async () => {
    let food = data.find((item) => item.id === props.foodItem._id);

    let finalPrice = qty * parseInt(options[size]);

    if (food) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return;
      }
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img
            src={props.foodItem.img}
            className="card-img-top"
            alt="Card image cap"
            style={{ height: "190px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100">
              <select
                className="m-2 h-100 bg-success rounded"
                value={qty}
                onChange={(e) => setQty(parseInt(e.target.value))}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                className="m-2 h-100 bg-success rounded"
                ref={priceRef}
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>

              <div className="d-inline h-100 fs-5">₹{qty * parseInt(options[size])}/-</div>
            </div>
            <hr />
            <button
              className="btn btn-success justify-center ms-2"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
