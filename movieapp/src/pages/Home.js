import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import MainSwiper from "../components/swiper/MainSwiper";
import HomeSwiper from "../components/swiper/HomeSwiper"

import { Api } from "../Api";
import { Group_key_arr, Group_obj } from "../atom/Group";

function Home(){ 
    return (
        <div>
            <div>
                <MainSwiper/>
                {Group_key_arr.map(group=>
                    <div className="homeswiper-container">
                        <div className="homeswiper-link"><Link className="homeswiper-title" to={`/${group}`}>{group}</Link></div>
                        <HomeSwiper API={`${Api}?limit=10&${Group_obj[group]}&sort_by=rating`} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;