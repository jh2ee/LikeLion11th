import { useEffect, useState } from "react";

import MainSwiper from "../components/swiper/MainSwiper";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading]=useState(true);
    const [movies, setMovies]=useState([]);
    const getMovies=async()=>{
        const json=await(
        await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
        ).json();
        setMovies(json.data.movies)
        setLoading(false);
    }
    useEffect(()=>{
        getMovies();
    }, []);

    return (
        <div>
            {/* 배치 수정 */}
            <div>
                <MainSwiper/>
            </div>
            
            {/* 기존 배치 방법 */}
            <div>
                {loading ? (
                    <h1>Loading...</h1>
                    ) : (
                    <div>
                        {movies.map(movie=> (
                        <Movie
                            key={movie.id}
                            id={movie.id} 
                            coverImg={movie.medium_cover_image} 
                            title={movie.title} 
                            summary={movie.summary} 
                            genres={movie.genres} 
                        />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;