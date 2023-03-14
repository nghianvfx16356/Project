import YouTube from "react-youtube";
import React, { useEffect, useState } from "react";
import { ApiConfig, requests } from "../API/Api";

const MovieDetail = ({ movieData }) => {
    const [isVideo, setIsVideo] = useState(false);
    const [keyVideo, setKeyVideo] = useState("");
    console.log(movieData)
    useEffect (() => {
        const urlMovieSever = `https://api.themoviedb.org/3/movie/${movieData.id}/videos?api_key=${ApiConfig.API_KEY}`;
        
        // const urlMovieSever = `https://api.themoviedb.org/3/movie/616037/videos?api_key=${API_KEY}`;
        async function CallAPI() {
            try {
                await fetch(urlMovieSever)
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.results.length === 0) {
                            setIsVideo(false);
                        } else {
                            setIsVideo(true);
                            const videos = data.results.filter((item) => {
                                return (
                                    (item.site === "YouTube" && item.type === "Teaser") ||
                                    item.type === "Trailer"
                                );
                            });
                            const isTrailer = videos.filter(
                                (item) => item.type === "Trailer"
                            );
                            if (isTrailer.length === 0) {
                                setKeyVideo(videos[0].key);
                            } else {
                                setKeyVideo(isTrailer[0].key);
                            }
                        }
                    });
            } catch (error) { }
        }
        // goi API
        CallAPI();
    }, []);
    const opts = {
        height: "400",
        width: "100%",
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <div>
            <div className="row movie-detail ">
                <div key={movieData.name} className="detail-description col-md=6">
                    <h3 style={{ color: 'white'}}>{movieData.name}</h3>
                    <p style={{color:'white'}}>
                        <strong style={{color:'white'}}>{`Release Date: ${movieData.first_air_date}`}</strong>
                    </p>
                    <p>
                        <strong style={{color:'white'}}>{`Vote: ${movieData.vote_average}/10`}</strong>
                    </p>
                    <p style={{ fontSize: "14px" , color: 'white'}}>{movieData.overview}</p>
                </div>
                <div className="video-trailer col-md=6">
                    {isVideo ? (
                        <YouTube videoId={keyVideo} opts={opts} />
                    ) : (
                        <img src={ApiConfig.w500Image + movieData.backdrop_path || "#"} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;

