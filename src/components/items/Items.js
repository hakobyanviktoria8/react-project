import React, { useEffect, useContext } from "react";
import { DataContext } from "../../App";
import Layout from "../layout/Layout";
import "./../../util/styles/Items.css";
import Item from "./Item";
import Search from "./Search";

function Items({ mode }) {
  const [data, setData] = useContext(DataContext);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <div className={mode ? "dark Items" : "Items"}>
        {!data ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h1>GitHub Users list</h1>
            <Search />
            <div className="itemsWrapper">
              {data && data.map((item) => <Item key={item.id} item={item} />)}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Items;
