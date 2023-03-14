import React, { useEffect, useRef, useState } from "react";
import { ApiConfig } from "../API/Api";
import MovieDetail from "../MovieDetail/MovieDetail";
import './resultlist.css';

const ResultList = ({query}) => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
  
    const [clickValueID, setClickVlueID] = useState(0);
    const [eventClick, setEventClick] = useState({});
  
    useEffect(() => {
      try {
        const urlAPI =
          "https://api.themoviedb.org/3/search/movie?api_key=" +
          ApiConfig.API_KEY +
          "&language=en-US&query=" +
          query +
          "&page=1&include_adult=false";
        fetch(urlAPI)
          .then((res) => res.json())
          .then((data) => {
            if (data.results.length === 0) {
              throw "Không có kết quả hợp lệ";
            } else {
              setData(data.results);
            }
          });
      } catch (error) {
        console.log(error);
      }
    }, [query]);
  
    // doan nay code logic cho phan click img
    const valueID = useRef(0);
    useEffect(() => {
      valueID.current = clickValueID;
    }, [clickValueID]);
  
    const handleClick = (e) => {
      const a = e.target.id;
      setClickVlueID(a);
  
      //logic
      if (a === valueID.current) {
        setShow(!show);
      } else {
        setShow(true);
      }
      // cac value can giu lai
      setEventClick({
        id: data
          .filter((elm) => elm.id == a)
          .map((elm) => elm.id)
          .join(),
        backdrop_path: data
          .filter((elm) => elm.id == a)
          .map((elm) => elm.backdrop_path)
          .join(),
        name: data
          .filter((elm) => elm.id == a)
          .map((elm) => elm.title)
          .join(),
        first_air_date: data
          .filter((elm) => elm.id == a)
          .map((elm) => elm.release_date)
          .join(),
        vote_average: data
          .filter((elm) => elm.id == a)
          .map((elm) => elm.vote_average)
          .join(),
        overview: data
          .filter((elm) => elm.id == a)
          .map((elm) => elm.overview)
          .join(),
      });
    };
    console.log(eventClick)

    return (
        <div>
            <div className="search-result row">
                <h2>Search Result</h2>
                {data.map((item, index) => (
                    <img
                        id={item.id}
                        onClick={(e) => handleClick(e)}
                        key={index}
                        src={
                            item.poster_path
                                ? ApiConfig.w500Image + item.poster_path
                                : "https://wp.hrc.com.vn/wp-content/uploads/2020/12/winner-successful-concept_51195-3797-e1631452513463.png"
                        }
                    ></img>
                ))}
            </div>
            {show && <MovieDetail movieData={eventClick} />}
        </div>
    )
}

export default ResultList;