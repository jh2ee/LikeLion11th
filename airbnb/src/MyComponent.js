import React from "react"

function MyComponent(props){
    return(
        <div>
            <div className="container">
                <img src={props.image} className="img"></img>
                <div className="text">
                    <div className="main">
                        <h1 className="title">{props.title}</h1>
                        <div className="grade">{props.grade} ★</div>
                    </div>
                    <div className="details">
                        <div className="gray">{props.distance}km 거리</div>
                        <div className="design">{props.design}</div>
                        <div className="gray">{props.date}</div>
                        <div className="price"><span className="weight">₩{props.price}</span> /박</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyComponent