import React from "react";
import "../styles/Header.scss";
import {Link} from "react-router";

const Header = () => {
    return <div className="header-container">
        <div>
            <Link to={"/"}><img src={'https://images.treebohotels.com/images/hotrod/treebo-new-logo-white.svg'} alt={"Treebo"} className="treebo-logo"/></Link>
        </div>
    </div>
}

export default Header;