import React, { useRef, useState, useEffect } from "react";
import {Api} from "../../Api";
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
        await fetch(`${Api}?minimum_rating=9&sort_by=year&limit=5`)
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
            className="main-swiper"
        >
            <div>
                {movies.map(movie=> 
                    <SwiperSlide>
                        <MainSwiperCard
                            key={movie.id}
                            id={movie.id} 
                            coverImg={movie.medium_cover_image} 
                            title={movie.title} 
                        />
                    </SwiperSlide>
                )}
            </div>
        </Swiper>
        </>
    );
}

export default MainSwiper;