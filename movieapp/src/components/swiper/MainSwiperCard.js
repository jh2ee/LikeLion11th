import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

function MainSwiperCard({id, coverImg, title, summary, genres}){
    return(
        <div className="card">
            <Link to={`movie/${id}`}>
                <img className="poster" src={coverImg} alt={title} />
                <h3>{title}</h3>
            </Link>
        </div>
    )
}

MainSwiperCard.propTypes={
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainSwiperCard;

const Container=styled.div`
    textAlign: "center";
`;