import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import NavBar from "../navbar/Navbar";
import { requests,ApiConfig } from "../API/Api";
import './header.css'

const Header = () => {
    const [dataAPI, setDataAPI] = useState({});
    //sate save background banner
    const [linkBG, setLinkBG] = useState("");

    //Hook useEffect thuc hien lenh requests API
    useEffect(() => {
        // ham async get API.
        async function getAPI() {
            const datas = await fetch(requests.fetchNetflixOriginals)
                .then((res) => res.json())
                .then((data) => data.results)
                .then((data) => data[Math.floor(Math.random() * (data.length - 1))])
                .then((data) => {
                    //set du lieu hien thi
                    setDataAPI(data);
                    //set Background
                    setLinkBG(`url("${ApiConfig.w500Image}${data.backdrop_path}")`);
                });
        }
        // Goi API
        getAPI();
    }, []);
    return (
        <div className="header row" style={{ backgroundImage: linkBG}}>
            <NavBar />
            <Banner data={dataAPI} />
        </div>
    )
}

export default Header;