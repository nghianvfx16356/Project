import React, { useEffect, useRef, useState } from "react";
import { ApiConfig, requests } from "../API/Api";
import './movieslist.css';
import MovieDetail from "../MovieDetail/MovieDetail";

const MoviesList = ({ data }) => {
      // hook save value array film from api
  const [dataFilm, setDataFilm] = useState([]);
  //hook save danh muc film
  const [list, setList] = useState("");
  // hook an hiden model MovieDetail
  const [show, setShow] = useState(false);
  // hook save props for component MovieDetail
  const [eventCLick, setEventClick] = useState({});
  //Hock luu gia tri id sau moi lan click vap poster
   const [clickValueID, setClickVlueID] = useState(0);

  useEffect(() => {
    async function CallAPI() {
      await fetch(data)
        .then((res) => res.json())
        .then((data) => setDataFilm(data.results));
    }
    CallAPI();

    if (data === requests.fetchNetflixOriginals) {
      setList("Original");
    } else if (data === requests.fetchTrending) {
      setList("Xu Hướng");
    } else if (data === requests.fetchTopRated) {
      setList("Xếp hạng cao");
    } else if (data === requests.fetchActionMovies) {
      setList("Hành động");
    } else if (data === requests.fetchComedyMovies) {
      setList("Hài");
    } else if (data === requests.fetchHorrorMovies) {
      setList("Kinh dị");
    } else if (data === requests.fetchRomanceMovies) {
      setList("Lãng mạng");
    } else if (data === requests.fetchDocumentaries) {
      setList("Tài liệu");
    }
  }, []);

  //logic
  const isCheck = () => {
    if (data === requests.fetchNetflixOriginals) {
      return 1;
    } else {
      return 2;
    }
  };

  //  // doan nay code logic cho phan click img
  const valueID = useRef(0);
  useEffect(() => {
    valueID.current = clickValueID;
  }, [clickValueID]);

  // console.log(valueID.current === clickValueID);
  //ham su kien

  const handleClick = (e) => {
    const a = e.target.id;
    setClickVlueID(a);
    console.dir(e.target);

    //logic
    if (a === valueID.current) {
      setShow(!show);
    } else {
      setShow(true);
    }
    // cac value can giu lai
    setEventClick({
      id: dataFilm
        .filter((elm) => elm.id == a)
        .map((elm) => elm.id)
        .join(),
      backdrop_path: dataFilm
        .filter((elm) => elm.id == a)
        .map((elm) => elm.backdrop_path)
        .join(),
      name: dataFilm
        .filter((elm) => elm.id == a)
        .map((elm) => elm.name)
        .join(),
      first_air_date: dataFilm
        .filter((elm) => elm.id == a)
        .map((elm) => elm.first_air_date)
        .join(),
      vote_average: dataFilm
        .filter((elm) => elm.id == a)
        .map((elm) => elm.vote_average)
        .join(),
      overview: dataFilm
        .filter((elm) => elm.id == a)
        .map((elm) => elm.overview)
        .join(),
    });
  };

    return (
        <div>
            <div className="main-content row">
                <h4>{list}</h4>
                <div className="slide">
                    {dataFilm.map((item) => (
                        <img
                            key={item.id}
                            onClick={(e) => handleClick(e)}
                            id={item.id}
                            className={isCheck() === 1 ? "poster-path" : " backdrop_path"}
                            src={
                                isCheck() === 1
                                    ? ApiConfig.w500Image + item.poster_path
                                    : ApiConfig.w500Image + item.backdrop_path
                            }
                        />
                    ))}
                </div>
            </div>
            {show && <MovieDetail movieData={eventCLick} />}
        </div>
    )
}
export default MoviesList