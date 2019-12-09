import {Route, IndexRoute} from "react-router";
import React from "react";
import AppRoutes from "./constants/appRoutes";
import App from "./containers/App";
import HotelList from "./containers/HotelList";
import Hotel from "./containers/Hotel";

const routes = (
    <Route component={App} path={AppRoutes.HOTEL_LIST}>
        <IndexRoute component={HotelList}/>
        <Route component={Hotel} path={AppRoutes.HOTEL_DETAILS}/>
    </Route>
)

export default routes;