import React, {useEffect, useState} from "react";
import "../Followers/Followers.css";
import Pagination from "react-js-pagination";
import imgLoad from "../../img/Spinner.gif";

export function Following({followgUrl}) {
    const [followg,setFollowg] = useState([]);
    const [arrItem, setArrItem] = useState([]);
    const [activePage,setActivePage] = useState(1);
    const [loading, setLoading]=useState(false);

    const handlePageChange = (pageNumber) =>{
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    };

    const printCart = (items)=>{
        let newArr = [];
        let size = 6;
        for (let i=0; i<items.length; i+=size) {
            newArr.push(items.slice(i,i+size));
        }
        setArrItem(newArr);
    };

    useEffect(() => {
        setLoading(true);
        fetch(followgUrl)
            .then(response => response.json())
            .then(data =>{
                setFollowg(data);
                printCart(data);
                setLoading(false);
            })
    }, [followgUrl]);

    return(
        loading?
            <div className={"loading"}>
                <img src={imgLoad} alt=""/>
            </div>
            :
        arrItem && arrItem.length>0 ?
            <div>
                <div className={"Cart-Follows-Wraper"}>
                    {
                        arrItem[activePage-1].map(follow=>
                            <div key={follow.id} className={"Cart-Follows"}>
                                <div>
                                    <img src={follow.avatar_url} alt=""/>
                                </div>
                                <div>
                                    <h2>{follow.login}</h2>
                                    <p>{follow.html_url}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={activePage}
                    itemsCountPerPage={6}
                    totalItemsCount={followg.length}
                    pageRangeDisplayed={Math.ceil(arrItem.length)}
                    onChange={handlePageChange}
                />
            </div>
            :
            <p className={"value0"}>There isn't any following!</p>
    )
}