import {Link} from "react-router-dom";
import "./NavBar.css";
import menubar from "./menubar.jpg";

function NavItems(){
    return(
        <div className="NavBar">
            <div className="Logo"><Link className="Logotext" to={'/'} >J-Flix</Link></div>

            <div className="NavMenus">
                <Link className="MenuList" to={'/'} >Home</Link>
                <Link className="MenuList" to={'/toprate'} >Top Rate</Link>
                <Link className="MenuList" to={'/Romance'} >Romance</Link>
                <Link className="MenuList" to={'/Action'} >Action</Link>
            </div>

            <div>
                <img className="MenuBar" src={menubar} />
            </div>
        </div>
    )
}

export default NavItems;