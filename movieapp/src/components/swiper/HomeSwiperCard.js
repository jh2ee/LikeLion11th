import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function HomeSwiperCard({id, coverImg, title, year, rating, runtime }){
    return(
        <div className="home-card">
            <Link to={`movie/${id}`}>
                <img className="home-poster" src={coverImg} alt={title} />
                <h3>{title}</h3>
                <h4>{year}</h4>
                <h4>Rating: {rating}</h4>
                <h4>{runtime ? `Runtime: ${runtime}` : null}</h4>
            </Link>
        </div>
    )
}

HomeSwiperCard.propTypes={
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HomeSwiperCard;