import DateFnsUtils from "@date-io/date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, CircularProgress, Container, Table } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "state/modules/weather/weatherSlice";
import useNotification from "utils/hooks/notification";
import { useStyles } from "components/modules/publics/styles";
import NewsDetails from "../home/NewsDetail";

const ListForecasts = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { showError } = useNotification();
    const [forecasts, setForecasts] = useState([]);
    const [start, setStart] = useState(0);
    const [isGet, setIsGet] = useState(true);
    const [isFullDetail, setIsFullDetail] = useState(false);
    const [forecast, setForecast] = useState({});
    useEffect(() => {
        setIsGet(true);
        dispatch(weatherActions.getForecasts({
            start: start,
            limit: 10,
            onComplete: (error, data) => {
                setIsGet(false);
                if (!error) {
                    console.log(data);
                    setForecasts(data);
                    setIsGet(false);
                    return;
                }
                const errorMessages = Object.values(error).join(". ");
                return showError(errorMessages);
            }
        }));
    }, [dispatch, start]);
    return (isFullDetail ? <NewsDetails news={forecast} setIsFullNews={setIsFullDetail} setNews={setForecast} /> : <Container maxWidth="xl">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Box py={2}>
                {isGet ? <Box display="flex" justifyContent="center" py={20}><CircularProgress /></Box> : <Table className="table table-alternate-spaced">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center"></th>
                            <th style={{ width: '300px' }} scope="col">TITLE</th>
                            <th scope="col">CREAT AT</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecasts.map(value => {
                            const create_at = new Date(parseInt(value.post_at) * 1000);
                            return (<><tr key={value.id} onClick={() => {
                                setIsFullDetail(true);
                                setForecast(value);
                            }}>
                                <td className="text-center text-black-50">
                                    <img alt="..." className="card-img-wrapper" src={value.thumbnail} height="100px" width="80px" />
                                </td>
                                <td>
                                    <b>{value.title}</b>
                                </td>
                                <td>
                                    <span>{create_at && create_at.getDate() + "/" + create_at.getMonth() + "/" + create_at.getFullYear()}</span>
                                </td>
                                <td className="text-right">
                                    <Button
                                        className="btn-neutral-first mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                                        onClick={() => {
                                            setIsFullDetail(true);
                                            setForecast(value);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={['fas', 'edit']} className="font-size-sm" />
                                    </Button>
                                </td>
                            </tr>
                                <tr className="divider"></tr></>)
                        })}
                    </tbody>
                </Table>}
            </Box>
            <Box p={3} display="flex" flexDirection="row-reverse">
                <Button
                    disabled={forecasts.length < 10}
                    className={classes.btnNext}
                    style={{ marginLeft: "25px" }}
                    onClick={() => {
                        setStart(start + 10);
                    }}
                >
                    NEXT
            </Button>
                <Button
                    disabled={start === 0}
                    variant="contained"
                    style={{ marginLeft: "25px" }}
                    className={classes.btnBack}
                    onClick={() => {
                        setStart(start - 10);
                    }}
                >
                    BACK
            </Button>
            </Box>
        </MuiPickersUtilsProvider>
    </Container>)
};

export default ListForecasts;