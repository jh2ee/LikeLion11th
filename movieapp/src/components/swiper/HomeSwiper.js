import { useState, useEffect } from "react";
import HomeSwiperCard from "./HomeSwiperCard";
import Loading from "../Loading";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSwiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function HomeSwiper({API}){
    const [loading, setLoading]=useState(true);
    const [movies, setMovies]=useState([]);
    const getMovies=async()=>{
        const json=await(
        await fetch(API)
        ).json();
        setMovies(json.data.movies)
        setLoading(false);
    }
    useEffect(()=>{
        setLoading(true);
        getMovies();
    }, []);

    return(
        <>
        {loading ? (<Loading />) : (
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="home-swiper"
            >
                <div>
                    {movies.map(movie=> 
                        <SwiperSlide>
                            <HomeSwiperCard
                                key={movie.id}
                                id={movie.id} 
                                coverImg={movie.medium_cover_image} 
                                title={movie.title}
                                year={movie.year}
                                rating={movie.rating}
                                runtime={movie.runtime} 
                            />
                        </SwiperSlide>
                    )}
                </div>
            </Swiper>
        )}
        </>
    )
}

export default HomeSwiper;