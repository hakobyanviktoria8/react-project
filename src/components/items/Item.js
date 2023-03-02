import React from "react";
import { useNavigate } from "react-router-dom";

function Item({ item }) {
  const navigate = useNavigate();

  const handleMoreData = () => {
    fetch(item.url)
      .then((response) => response.json())
      .then((data) => {
        navigate(`/users/${data.id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="item">
      <img src={item.avatar_url} className="item_img" />
      <h3>{item.login}</h3>
      <button onClick={handleMoreData}>Show more</button>
    </div>
  );
}

export default Item;
