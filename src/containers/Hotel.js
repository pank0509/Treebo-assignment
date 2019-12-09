import React, { useEffect, useState } from "react";
import HotelDetails from "../components/HotelDetails";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import HotelActions from "../actions/HotelActions";

const Hotel = (props) => {
    let hotelPrices = {...props.prices[props.params.hotelId]}
    let hotelDetails = {...props.hotels[props.params.hotelId]};
    hotelDetails.prices = hotelPrices;
    const [hotel, setHotelDetail] = useState(hotelDetails);
    
    useEffect(() => {
        props.getHotelDetails(props.params.hotelId);
    },[]);
    
    useEffect(() => {
        let hotelPrices = props.prices[props.params.hotelId];
        let hotelDetails = props.hotels[props.params.hotelId];
        hotelDetails.prices = hotelPrices;
        setHotelDetail(hotelDetails)
    }, [props.prices, props.hotels]);

    return <div>
        {hotel && <HotelDetails hotel={hotel}/>}
    </div>
}

const mapStateToProps = (state, props) => {
    return {
        hotels: state.hotel.hotelList,
        prices: state.hotel.hotelPricesList,
    }
}

const mapDispatchToPros = (dispatch, props) => {
    return bindActionCreators({
        getHotelDetails: HotelActions.getHotelDetails,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPros)(Hotel);