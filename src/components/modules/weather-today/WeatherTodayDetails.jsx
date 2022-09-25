import { Box, Card, CircularProgress, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "state/modules/weather/weatherSlice";
import useNotification from "utils/hooks/notification";
import CardWeather from "./CardWeather";

const WeatherTodayDetails = () => {
    const dispatch = useDispatch();
    const { showError } = useNotification();
    const [weather, setWeather] = useState({});
    const [isGet, setIsget] = useState(false);
    useEffect(() => {
        setIsget(true);
        dispatch(weatherActions.getWeatherToday({
            onComplete: (error, data) => {
                setIsget(false);
                if (!error) {
                    console.log(data);
                    setWeather(data);
                    return;
                }
                const errorMessages = Object.values(error).join(". ");
                return showError(errorMessages);
            }
        }))
    }, [dispatch]);
    return (isGet ? <Box display="flex" justifyContent="center" py={20}><CircularProgress /></Box> : <>
        <Card className="mb-5">
            <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-0">
                <Box p={3}><Typography variant="h4">{weather.weather_earth && weather.weather_earth.title}</Typography></Box>
            </div>
        </Card>
        {weather.weather_items && weather.weather_items.map(item => (
            <CardWeather key={item.id} item={item} />
        ))}
    </>)
};

export default WeatherTodayDetails;