import { Link } from "react-router-dom";
import "./PageCard.css";

function PageCard({ id, coverImg, title, year, rating, runtime, summary }){
    return(
        <div className="page-card">
            <Link to={`../movie/${id}`}>
                <img className="page-poster" src={coverImg} alt={title} />
            </Link>
            <div className="page-textbox">
                <h3>{title}</h3>
                <h4>{year}</h4>
                <h4>Rating: {rating}</h4>
                <h4>{runtime ? `Runtime: ${runtime}` : null}</h4>
                <br/>
                <h4>Summary:</h4>
                <p>{summary.length > 270 ? `${summary.slice(0,270)}...` : summary}</p>
            </div>
        </div>
    )
}

export default PageCard;