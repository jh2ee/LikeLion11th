
import {Link} from "react-router-dom";

function NavItems(){
    return(
        <div>
            <div>J-Flix</div>

            <div>
                <Link to={'/'} >Home</Link>
                <Link to={'/toprate'} >TopRate</Link>
                <Link to={'/nowplaying'} >Now Playing</Link>
                <Link to={'/upcomming'} >Up Comming</Link>
            </div>
        </div>
    )
}

export default NavItems;