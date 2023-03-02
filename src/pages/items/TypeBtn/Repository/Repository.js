import React, { useState, useEffect } from "react";
import "./Repository.css";
import Pagination from "react-js-pagination";
import imgLoad from "../../img/Spinner.gif";

export function Repository({ reposUrl }) {
  const [repos, setRepops] = useState([]);
  const [arrItem, setArrItem] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const printCart = (items) => {
    let newArr = [];
    let size = 6;
    for (let i = 0; i < items.length; i += size) {
      newArr.push(items.slice(i, i + size));
    }
    setArrItem(newArr);
  };

  useEffect(() => {
    setLoading(true);
    fetch(reposUrl)
      .then((response) => response.json())
      .then((data) => {
        setRepops(data);
        printCart(data);
        setLoading(false);
      });
  }, [reposUrl]);

  return loading ? (
    <div className={"loading"}>
      <img src={imgLoad} alt="" />
    </div>
  ) : arrItem && arrItem.length > 0 ? (
    <div>
      <div className={"CartsWraper"}>
        {arrItem[activePage - 1].map((item) => (
          <div className={"Cart"} key={item.id}>
            <div>
              <h2>{item.name}</h2>
            </div>
            <div>
              <small>
                Description:{" "}
                {item.description && item.description.length > 75
                  ? item.description.slice(0, 75) + "..."
                  : item.description}
              </small>
            </div>
            <div>
              <span>
                <b>Branch: </b>
                {item.default_branch}
              </span>
              <span>
                <b>Private: </b>
                <input type="checkbox" defaultChecked={item.private} />
              </span>
              <span>
                <b>Downloads: </b>
                <input type="checkbox" defaultChecked={item.has_downloads} />
              </span>
            </div>
            <div className={"Cart-last-elem"}>
              <span>
                <b>Created: </b>
                {item.created_at.slice(0, 10)}
              </span>
              <span>
                <b>Last updated: </b>
                {item.updated_at.slice(0, 10)}
              </span>
              <span>
                <b>Watchers: </b>
                {item.watchers}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        itemClass="page-item"
        linkClass="page-link"
        activePage={activePage}
        itemsCountPerPage={6}
        totalItemsCount={repos.length}
        pageRangeDisplayed={Math.ceil(arrItem.length)}
        onChange={handlePageChange}
      />
    </div>
  ) : (
    <p className={"value0"}>There isn't any repositories!</p>
  );
}
