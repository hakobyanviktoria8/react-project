import React,{ useState , useEffect } from "react";
import "./Repository/Repository.css"
import Pagination from "react-js-pagination";
import imgLoad from "../img/Spinner.gif";
import {Repos} from "./Repos";



export function TypeBtnComp({url,compName}) {
    const [item,setItem] = useState([]);
    const [arrItem, setArrItem] = useState([]);
    const [activePage,setActivePage] = useState(1);
    const [loading, setLoading]=useState(false);
    const repos =<Repos arrItem={arrItem} activePage={activePage}/>;

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
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                setItem(data);
                printCart(data);
                setLoading(false)
            })
    }, [url]);

    return(
        loading?
            <div className={"loading"}>
                <img src={imgLoad} alt=""/>
            </div>
            :
            arrItem && arrItem.length>0 ?
                <div>
                    {compName}
                    <Pagination
                        itemClass="page-item"
                        linkClass="page-link"
                        activePage={activePage}
                        itemsCountPerPage={6}
                        totalItemsCount={item.length}
                        pageRangeDisplayed={Math.ceil(arrItem.length)}
                        onChange={handlePageChange}
                    />
                </div>
                :
                <p className={"value0"}>There isn't any items!</p>
    )
}