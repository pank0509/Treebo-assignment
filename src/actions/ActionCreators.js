import {FETCH_HOTEL_LIST_SUCCESS, FETCH_HOTEL_PRICES_SUCCESS} from "../constants/actionTypes";

export class HotelActionCreator {
    static getHotelsActionSuccess = (data) => {
        return {type: FETCH_HOTEL_LIST_SUCCESS, data: data};
    }
    static getHotelPricesActionSuccess = (data)=> {
        return {type: FETCH_HOTEL_PRICES_SUCCESS, data: data};
    }
}