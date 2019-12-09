import React from "react";
import defaultHotelImg from "../images/hotel.png";
import AppUtils from "../utils/AppUtils";
import {Link} from "react-router";
import "../styles/HotelCard.scss";
import ButtonComponent from "./Button";
import {browserHistory} from "react-router";

const HotelDetailsCard = (props) => {
    let {hotel, price} = props;
    let hotelImage = hotel && hotel.image ? hotel.image : defaultHotelImg;
    let viewHotel = () => {
        browserHistory.push(AppUtils.getHotelLink(hotel.id));
    }
    return <div className="hotel-card">
        <div className="hotel-image">
            <img src={hotelImage} alt="Hotel pictures"/>
        </div>
        <div className="hotel-details">
            <div>
                <Link to={AppUtils.getHotelLink(hotel.id)}><h2 className="hotel-name">{hotel.name}</h2></Link>
                <div className="hotel-locality">
                    {hotel.locality}{hotel.locality && <span>,&nbsp;</span>}
                    <span>{hotel.city}</span>
                </div>
            </div>
            <div className="hotel-price-container">
                {price && <div className="price">Rs. {price}</div>}
                <div className="hotel-btn"><ButtonComponent clickHandler={viewHotel} text={"View details"}/></div>
            </div>
        </div>
    </div>
}

export default HotelDetailsCard;