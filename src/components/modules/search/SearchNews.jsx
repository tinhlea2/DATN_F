import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Grid,
    FormHelperText,
    TextField,
    InputAdornment,
    CircularProgress
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import useNotification from "utils/hooks/notification";
import { useDispatch } from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import { newsActions } from "state/modules/news/newsSlice";
import SearchNotFound from "./SearchNotFound";
import NewsDetails from "../home/NewsDetail";
import ListSearch from "./ListSearch";

const SearchNews = () => {
    const dispatch = useDispatch();
    const { showError } = useNotification();

    const [isKeySearch, setIsKeySearch] = useState(false);
    const [keySearch, setkeySearch] = useState("");
    const [fullDetails, setfullDetails] = useState(false);
    const [listSearch, setListSearch] = useState([]);
    const [newsDetail, setNewsDetail] = useState({});
    const [isGetList, setIsGetList] = useState(false);
    const [prevKeySearch, setPrevKeySearch] = useState("");

    useEffect(() => {
        if (keySearch !== "") {
            if (keySearch !== prevKeySearch) {
                setIsGetList(true);
                dispatch(newsActions.getSearchNews({
                    key: keySearch,
                    onComplete: (error, data) => {
                        setIsGetList(false);
                        if (!error) {
                            setListSearch(data.results);
                            setPrevKeySearch(keySearch);
                        }
                        const errorMessages = Object.values(error).join(". ");
                        return showError(errorMessages);
                    },
                }));
            }
        }
    }, [dispatch, keySearch]);

    useEffect(() => {
        if (keySearch !== "") {
            setIsKeySearch(true);
        } else {
            setIsKeySearch(false);
        }
    }, [keySearch, setIsKeySearch]);

    return (fullDetails ? <NewsDetails news={newsDetail} setIsFullNews={setfullDetails} setNews={setNewsDetail} /> : <Container maxWidth="xl">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Box p={3}>
                <Grid container spacing={3}>
                    <Grid item sm={5} xs={12}>
                        <TextField
                            label="Search News"
                            variant="outlined"
                            value={keySearch}
                            fullWidth
                            onChange={(event) => {
                                setkeySearch(event.target.value);
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment style={{ cursor: "pointer" }} position="end" onClick={() => {
                                        if (isKeySearch) {
                                            setkeySearch("");
                                            setPrevKeySearch("");
                                        }
                                    }}
                                    >
                                        {(isKeySearch) ? <CancelIcon /> : <SearchIcon />}
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <FormHelperText style={{ paddingLeft: "15px" }}>You can search by news title</FormHelperText>
                    </Grid>
                </Grid>
                <Box style={{ minHeight: "400px" }}>
                    {(keySearch !== "")
                        ? !isGetList ? (listSearch.length === 0
                            ? <SearchNotFound />
                            : <ListSearch listNews={listSearch} setIsFullNews={setfullDetails} setNews={setNewsDetail} />) : <Box display="flex" justifyContent="center" pt={20}><CircularProgress /></Box>
                        : null
                    }
                </Box>
            </Box>
        </MuiPickersUtilsProvider>
    </Container>
    );
};

export default SearchNews;
