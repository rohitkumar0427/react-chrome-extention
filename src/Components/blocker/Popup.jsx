import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export function Popup() {
  const [site, setSite] = useState("");
  const [data, setData] = useState([]);
  let webs = ["www.facebook.com", "www.netflix.com"];

  if (!localStorage.getItem("blocked")) {
    localStorage.setItem("blocked", JSON.stringify(webs));
  }

  const getData = () => {
    axios
      .get("http://localhost:3000/blockedSites")
      .then(({ data }) => setData(data));
  };

  useEffect(() => {
    getData();
  });

  // console.log(bSites);

  const handleChange = (e) => {
    setSite(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    // bSites = [...bSites, site];
    const payload = {
      title: site,
    };
    axios.post("http://localhost:3000/blockedSites", payload);
    // localStorage.setItem('blocked',JSON.stringify(bSites))

    setSite("");
  };

  return (
    <div>
      <div>
        <h1>Stop Procastinating</h1>
        <h3>Add Websites to Block</h3>
        <input type="text" value={site} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        {data.map((e) => {
          return <h5>{e.title}</h5>;
        })}
      </div>
    </div>
  );
}
