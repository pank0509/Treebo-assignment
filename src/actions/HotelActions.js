import ApiUtils from "../utils/ApiUtils";
import ApiUrls from "../constants/apiUrls";
import {HotelActionCreator} from "./ActionCreators";

export default class HotelActions {
    static getHotelList = () => {
        return (dispatch, getState) => {
            // Fetch list of hotels
            ApiUtils.getApiRequest(ApiUrls.GET_HOTEL_LIST_URL).then((response) => {
                let hotelsMap = {};
                response.data.forEach((hotel) => {
                    hotelsMap[hotel.id] = hotel;
                })
                dispatch(HotelActionCreator.getHotelsActionSuccess(hotelsMap));
            }).catch((error) => {
                // Handle error
            })
        }
    }
    static getHotelsPrices = () => {
        return (dispatch, getState) => {
            // Fetch hotel prices
            ApiUtils.getApiRequest(ApiUrls.HOTEL_PRICE_URL).then((prices) => {

                // Update existing hotels object
                let hotelPricesMap = {};
                prices.data.map((price) => {
                    hotelPricesMap[price.id] = price.price;
                })
                dispatch(HotelActionCreator.getHotelPricesActionSuccess(hotelPricesMap));
            })
        }
    }
    static getHotelDetails = (hotelId) => {
        return (dispatch, getState) => {
            // Fetch hotel details
            ApiUtils.getApiRequest(ApiUrls.GET_HOTEL_DETAILS_URL).then((response) => {
                console.log("********************", response);
                let updatedHotelsMap = {...getState().hotel.hotelList};
                updatedHotelsMap[hotelId] = {...updatedHotelsMap[hotelId], ...response.data};
                dispatch(HotelActionCreator.getHotelsActionSuccess(updatedHotelsMap));
            }).catch(error => {
                // Handle error
            })
        }
    }
}