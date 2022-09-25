import React from "react";
import compose from "components/hocs/compose";
import withLayout from "components/hocs/withLayout";
import { PageTitle } from "components/layout-components";
import WeatherTodayDetails from "components/modules/weather-today/WeatherTodayDetails";

const WeatherToday = () => {
    return (
        <>
            <PageTitle
                titleHeading="Weather Today"
                titleDescription="See the weather today on this page"
            ></PageTitle>

            <WeatherTodayDetails />
        </>
    );
};

export default compose(
    withLayout("leftsidebar"))(WeatherToday)