import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MainSwiper.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Mousewheel } from "swiper";
import MainSwiperCard from "./MainSwiperCard";


function MainSwiper() {
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
        <>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            navigation={true}
            mousewheel={false}
            modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
            className="mySwiper"
        >
            <div>
                {movies.map(movie=> 
                    <SwiperSlide>
                        <MainSwiperCard
                            key={movie.id}
                            id={movie.id} 
                            coverImg={movie.medium_cover_image} 
                            title={movie.title} 
                            summary={movie.summary} 
                            genres={movie.genres} 
                        />
                    </SwiperSlide>
                )}
            </div>
        </Swiper>
        </>
    );
}

export default MainSwiper;