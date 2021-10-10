import { Button, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import styles from "../bookmark/bookmark.module.css";

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
  }, []);

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
        <h1 className={styles.head}>Stop Procastinating</h1>
        <h5 style={{ fontSize: "1rem", color: "white" }}>
          Add Websites to Block
        </h5>
        <TextField type="text" value={site} onChange={handleChange} />
        <br />
        <Button onClick={handleClick}>Add</Button>
      </div>
      <div
        style={{
          width: "400px",
          border: "1px solid #1e1e1e",
          borderRadius: "10px",
          margin: "5px auto",
          backgroundColor: "white",
          fontSize: "1.2rem",
        }}
      >
        {data.map((e) => {
          return (
            <div
              style={{
                color: "black",
                borderBottom: "1px solid black",
                width: "fit-content",
                margin: "auto",
              }}
            >
              {e.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
