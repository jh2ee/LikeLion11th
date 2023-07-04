import { useState, useEffect } from "react";
import { Api } from "../Api";
import PageCard from "../components/PageCard";
import Loading from "../components/Loading";
import styled from "styled-components";

function Action(){
    const [loading, setLoading]=useState(true);
    const [movies, setMovies]=useState([]);
    const getMovies=async()=>{
        const json=await(
        await fetch(`${Api}?genre=Action&sort_by=rating`) 
        ).json();
        setMovies(json.data.movies)
        setLoading(false);
    }
    useEffect(()=>{
        setLoading(true);
        getMovies();
    }, []);

    return (
        <div>
            <Genre>Action</Genre>
            {loading ? (<Loading/>) : (
                <Movies>
                    {movies.map(movie=>
                        <PageCard
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            year={movie.year}
                            rating={movie.rating}
                            runtime={movie.runtime}
                            summary={movie.summary}
                        />
                    )}
                </Movies>
            )}
        </div>
    )
}

export default Action;

const Genre=styled.div`
    text-align: center;
    font-size: 46px;
    font-style: bold;
    color: white;
`
const Movies=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, auto));
`