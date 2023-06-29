import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MovieDetail from "../components/MovieDetail";
import Loading from "../components/Loading";

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    /*
    const getMovie = async () => {
        if (id) {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            console.log(json);
            setMovie(json.data.movie); // 영화 정보를 상태 변수에 저장
        }
    };
    */
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(response => response.json())
        .then(json => {
            setMovie(json.data.movie);
            setLoading(false);
        })
    }, []);
    return (
        // MovieDetail Component 보이기
        <div>
            {loading ? (
                <Loading />
                ) : (
                <MovieDetail
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    bgImg={movie.background_image_original}
                    title={movie.title}
                    year={movie.year}
                    genres={movie.genres}
                    rating={movie.rating}
                    runtime={movie.rating}
                    summary={movie.description_intro}
                />
            )}
        </div>
    );
}

export default Detail;