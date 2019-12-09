import {FETCH_HOTEL_LIST_SUCCESS, FETCH_HOTEL_PRICES_SUCCESS} from "../constants/actionTypes";
let defaultHotelState = {
    hotelList: {},
    hotelPricesList: {},
}
const HotelsReducer = (state = defaultHotelState, action) => {
    switch (action.type) {
        case FETCH_HOTEL_LIST_SUCCESS:
            return Object.assign({}, state, {hotelList: action.data});
        case FETCH_HOTEL_PRICES_SUCCESS:
            return Object.assign({}, state, {hotelPricesList: action.data});
        default: return state;
    }
}
export default HotelsReducer;