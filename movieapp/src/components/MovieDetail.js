import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./MovieDetail.css";

function MovieDetail({id, coverImg, bgImg, title, year, genres, rating, runtime, summary}){
    return(
        <div>
            <img className="bg" src={bgImg} />

            <div className="Container" >
              <img className="poster" src={coverImg} alt={title} />
              <div className="textbox" >
                <h2>{title}</h2>
                <h4>{year}  {genres.join(", ")}</h4>
                <h4>Rating: {rating}  Runtime: {runtime}</h4>
                <br/>
                <h4>Summary:</h4>
                <p>{summary.length > 900 ? `${summary.slice(0,900)}...` : summary}</p>
              </div>
            </div>

        </div>
    )
}

{/*summary.length > 235 ? `${summary.slice(0,235)}...` : summary*/}

MovieDetail.propTypes={
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;