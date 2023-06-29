import NavItems from "./NavItems";
import NavSearch from "./NavSearch";
import styled from "styled-components";

function NavBar(){
    return (
        <div className="NavBar">
            <NavItems/>
            <NavSearch/>
        </div>
    )
}

export default NavBar;