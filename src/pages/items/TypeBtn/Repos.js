import React from "react";

export function Repos({arrItem,activePage}) {
    return(
        <div className={"CartsWraper"}>
            {arrItem[activePage-1].map(item =>
                <div  className={"Cart"} key={item.id}>
                    <div><h2>{item.name}</h2></div>
                    <div><small>Description: {item.description && item.description.length>75 ? item.description.slice(0,75)+"..." : item.description}</small></div>
                    <div>
                        <span><b>Branch: </b>{item.default_branch}</span>
                        <span><b>Private: </b><input type="checkbox" defaultChecked={item.private}/></span>
                        <span><b>Downloads: </b><input type="checkbox" defaultChecked={item.has_downloads}/></span>
                    </div>
                    <div className={"Cart-last-elem"}>
                        <span><b>Created: </b>{item.created_at.slice(0,10)}</span>
                        <span><b>Last updated: </b>{item.updated_at.slice(0,10)}</span>
                        <span><b>Watchers: </b>{item.watchers}</span>
                    </div>
                </div>
            )}
        </div>
    )
}