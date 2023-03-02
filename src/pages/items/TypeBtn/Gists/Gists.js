import React, {useEffect, useState} from "react";
import "../Repository/Repository.css";
import Pagination from "react-js-pagination";
import imgLoad from "../../img/Spinner.gif";

export function Gists({gistsUrl}) {
    const [gists,setGists] = useState([]);
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
        fetch(gistsUrl)
            .then(response => response.json())
            .then(data =>{
                setGists(data);
                printCart(data);
                setLoading(false)
            })
    }, [gistsUrl]);

    return(
        loading?
            <div className={"loading"}>
                <img src={imgLoad} alt=""/>
            </div>
            :
        arrItem && arrItem.length>0 ?
            <div>
                <div className={"CartsWraper"}>
                    {
                        arrItem[activePage-1].map(gist=>
                            <div key={gist.id} className={"Cart"}>
                                <div>
                                    <h2>{gist.files["syntax-transcripts.json"] ? gist.files["syntax-transcripts.json"].filename : "File Name"}</h2>
                                </div>
                                <div>
                                    <span><b>Created: </b>{gist.created_at.slice(0,10)}</span>
                                    <span><b>Updated: </b>{gist.updated_at.slice(0,10)}</span>
                                </div>
                                <div>
                                    <span><b>Comments: </b>{gist.comments}</span>
                                    <span><b>public: </b><input type="checkbox" defaultChecked={gist.public}/></span>
                                </div>
                                <div className={"link"}>
                                    <a href={gist.html_url}><button>See more</button></a>
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
                    totalItemsCount={gists.length}
                    pageRangeDisplayed={Math.ceil(arrItem.length)}
                    onChange={handlePageChange}
                />
            </div>
            :
            <p className={"value0"}>There isn't any gists!</p>
    )
}