import React from "react";
import defaultHotelImg from "../images/hotel.png";
import ButtonComponent from "./Button";
import "../styles/HotelDetails.scss";

const HotelDetails = (props) => {
    let {hotel, prices} = props;
    let hotelImage = hotel && hotel.image ? hotel.image : defaultHotelImg;
    let showLocation = hotel && (hotel.locality || hotel.city);
    let bookHotel = () => {
        console.log("book hotel handler logic")
    }
    let roomsList = hotel.prices ? Object.keys(hotel.prices) : [];
    let showRoomPrices = hotel && hotel.prices && roomsList.length ? true : false;
    return <div className="hotel-details-container">
        <h1 className="hotel-name">{hotel.name}</h1>
        <div className="hotel-details">
            <div className="hotel-image">
                <img src={hotelImage} alt="Hotel pictures"/>
            </div>
            <div className="hotel-info-container">
                <div className="hotel-info">
                    <div>
                        {showLocation && <div>
                            <div className="detail-sub-heading">facilities</div>
                            <div className="hotel-locality">
                                {hotel.locality}{hotel.locality && <span>,&nbsp;</span>}
                                <span>{hotel.city}</span>
                            </div>
                        </div>}
                    </div>
                </div>
                {showRoomPrices && <div className="hotel-prices">
                    <div className="detail-sub-heading">Room Prices</div>
                    <div>
                        {roomsList.map((room, index) => {
                            return (
                                <div key={room} className="capitalise price">{room} : 
                                    {hotel.prices[room] ?
                                        <strong>{` ${hotel.prices[room]}`}</strong>
                                        :
                                        <strong> sold out</strong>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>}
                {hotel.policies && <div className="hotel-policies">
                    <div className="detail-sub-heading">policies</div>
                    <ul>
                        {hotel.policies.map((policy, index) => {
                            return <li key={index}>
                                {policy}
                            </li>
                        })}
                    </ul>
                </div>}
                {hotel.essentials && <div>
                    <div className="detail-sub-heading">facilities</div>
                    <div className="hotel-facilities-container">
                        {hotel.essentials.map((essential, index) => {
                            return <div className="essential-item" key={index}>
                                {essential}
                            </div>
                        })}
                    </div>
                </div>}
                <div>
                    <div className="hotel-btn"><ButtonComponent clickHandler={bookHotel} text={"Book now"}/></div>
                </div>
            </div>
        </div>
    </div>
}

export default HotelDetails;