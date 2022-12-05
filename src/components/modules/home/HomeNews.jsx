import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Card,
    CircularProgress,
    Container,
    Grid,
} from "@material-ui/core";
import { getNewNews, newsActions } from "state/modules/news/newsSlice";
import { useDispatch } from "react-redux";
import useNotification from "utils/hooks/notification";
import { useStyles } from "components/modules/publics/styles";
import NewsDetails from "./NewsDetail";
import CardNews from "./CardNews";

const HomeNews = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { showError } = useNotification();
    const [getList, setGetList] = useState([]);
    const [isGet, setIsGet] = useState(true);
    const [numpage, setStart] = useState(1);
    const [news, setNews] = useState({});
    const [image, setImage] = useState([]);
    const [isFullNews, setIsFullNews] = useState(false);
    useEffect(() => {
        setIsGet(true);
        dispatch(newsActions.getNewNews({
            numpage: numpage,
            onComplete: (error, data) => {
                setIsGet(false);
                if (!error) {
                    console.log(data.results);
                    setGetList(data.results);
                    setIsGet(false);
                    console.log(data.results);
                    return;
                }
                const errorMessages = Object.values(error).join(". ");
                return showError(errorMessages);
            }
        }));
    }, [dispatch,numpage]);
    return (isFullNews
        ? <Card className="mb-5">
            <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-0">
                <NewsDetails news={news} setImage={news.images} setIsFullNews={setIsFullNews} setNews={setNews} />
            </div>
        </Card>
        : <Container maxWidth="xl">
            {isGet ? <Box display="flex" justifyContent="center" py={20}><CircularProgress /></Box> : <div className="example-card-seamless mb-spacing-6">
                <div className="mb-spacing-6">
                    <Grid container spacing={6}>
                        {getList.map(value => {
                            return <CardNews key={value.id} news={value} setIsFullNews={setIsFullNews} setNews={setNews}/>
                        })}
                    </Grid>
                    <Box p={3} display="flex" flexDirection="row-reverse">
                        <Button
                            disabled={numpage === 6}
                            className={classes.btnNext}
                            style={{ marginLeft: "25px" }}
                            onClick={() => {
                                setStart(numpage + 1);
                            }}
                        >
                            NEXT
                        </Button>
                        <Button
                            disabled={numpage === 1}
                            variant="contained"
                            className={classes.btnBack}
                            style={{ marginLeft: "25px" }}
                            onClick={() => {
                                setStart(numpage-1);
                            }}>
                            BACK
                        </Button>
                    </Box>
                </div></div>}
        </Container>)
};

export default HomeNews;