export default class AppUtils {

    // Returns minimum price for hotel from a {room: price} object
    static minRoomPrice = (prices) => {
        let rooms = Object.keys(prices);
        let roomPrices = [];
        rooms.forEach((room) => {
            if (prices[room]) {
                roomPrices = [...roomPrices, prices[room]]
            }
        });
        return roomPrices.length > 0 ? Math.min(...roomPrices) : null;
    }

    // Returns hotel's link
    static getHotelLink = (id) => {
        return "/" + id;
    }
}