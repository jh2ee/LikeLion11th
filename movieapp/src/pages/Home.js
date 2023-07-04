import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
                    <div>
                        <Link to={`/${group}`}><Title>{group}</Title></Link>
                        <HomeSwiper API={`${Api}?limit=10&${Group_obj[group]}&sort_by=rating`} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;

const Title=styled.div`
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: 46px;
    margin-top: 150px;
    
`