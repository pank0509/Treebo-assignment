import React, { useEffect } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import HotelActions from "../actions/HotelActions";
import HotelDetailsCard from "../components/HotelDetailsCard";
import "../styles/HotelList.scss";
import AppUtils from "../utils/AppUtils";

const HotelList = (props) => {
    useEffect(() => {
        const { getHotelPrices, getHotelList } = props;
        // Fetch hotel list
        getHotelList();
        // Fetch hotel prices
        getHotelPrices();
    },[])

    let {hotels, prices} = props;
    let hotelIds = Object.keys(hotels);
    let showHotels = hotels && hotelIds.length > 0;
    return (
        <div className="hotel-list-container">
            <div className="hotel-list">
                {showHotels && hotelIds.map((key) => {
                    let minPrice = prices[key] ? AppUtils.minRoomPrice(prices[key]): null;
                    return <div key={key}>
                        <HotelDetailsCard hotel={hotels[key]} price={minPrice}/>
                    </div>
                })}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return bindActionCreators({
        getHotelList: HotelActions.getHotelList,
        getHotelPrices: HotelActions.getHotelsPrices,
    }, dispatch);
}
const mapStateToProps = (state, props) => {
    return {
        hotels: state.hotel.hotelList,
        prices: state.hotel.hotelPricesList,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HotelList);