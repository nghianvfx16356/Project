import React, { useEffect, useState } from "react";
import "./navbar.css";

function NavBar() {
    //state show background Nav
    let [show, setShow] = useState(false);

    //hook useEffect xu ly su kien cuon
    useEffect(() => {
        // event cuon
        const handleScoll = () => {
            if (window.scrollY >= 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener("scroll", handleScoll);

        //ham clearup
        return () => window.removeEventListener("scroll", handleScoll);
    }, []);

    //event click để chuyển trang
    const handleOnClick = (e) => {
        if (e.currentTarget.classList.value === "logo col-md-6") {
            window.location.replace("/");
        } else {
            window.location.replace("/search");
        }
    };
    return (
        <div className={`nav-bar row ${show ? "background" : "not-background"}`}>
            <div className="logo col-md-6" onClick={(e) => handleOnClick(e)}>
                <h4>Movie App</h4>
            </div>
            <div className="btn-search col-md-6" onClick={(e) => handleOnClick(e)}>
                <button>
                    <svg
                        className="svg-inline--fa fa-search fa-w-16"
                        fill="#ccc"
                        aria-hidden="true"
                        data-prefix="fas"
                        data-icon="search"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default NavBar;
