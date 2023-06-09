import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function MainSwiperCard({id, coverImg, title}){
    return(
        <div className="main-card">
            <Link to={`movie/${id}`}>
                <img className="main-poster" src={coverImg} alt={title} />
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