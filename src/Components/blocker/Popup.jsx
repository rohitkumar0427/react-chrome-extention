import React from 'react';
import { useState } from "react";

export default function Popup() {
    const[site, setSite] = useState("");
    let webs = ["www.facebook.com","www.netflix.com"]

    if(!localStorage.getItem('blocked')){
       localStorage.setItem('blocked',JSON.stringify(webs));
    }

    let bSites = JSON.parse(localStorage.getItem("blocked"))

    const handleChange = (e) => {
        setSite(e.target.value)
    }

    const handleClick = () =>{
            bSites = [...bSites, site];
            localStorage.setItem('blocked',JSON.stringify(bSites))
    }

    return (
        <div>
    
        <div>
        <h1>Stop Procastinating</h1>
        <h3>Add Websites to Block</h3>
        <input type="text" onChange = {handleChange}/>
        <button onClick= {handleClick}>Add</button>
        </div>
        <div>
            {bSites.map((e) => {
                return <span>{e.splice(4,e.length-3)}</span>
            })}
        </div>
        </div>
    )
}
