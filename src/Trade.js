import React, { useState } from "react";
import "./Trade.css";

function Trade() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const newItem = {
        title: title,
        description: description,
        quantity: quantity,
        image: e.target.result,
      };

      setItems((prevItems) => [...prevItems, newItem]);
      setTitle("");
      setDescription("");
      setQuantity("");
      setImage(null);
    };

    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="trade">
      <h1>Trade Items</h1>

      <div className="trade__form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Product Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label htmlFor="image">Upload Image:</label>
        <input type="file" id="image" onChange={handleImageUpload} />
        {image && (
          <button onClick={handleRemoveImage}>Remove Image</button>
        )}
      </div>

      <div className="trade__items">
        {items.map((item, index) => (
          <div key={index} className="trade__item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Quantity: {item.quantity}</p>
            <div className="trade__image-container">
              {item.image && (
                <img src={item.image} alt="Item" className="trade__image" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trade;
