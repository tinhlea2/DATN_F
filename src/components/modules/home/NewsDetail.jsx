import { Box, Button, CardContent } from "@material-ui/core";
import React from "react";
import { useStyles } from "components/modules/publics/styles";

const NewsDetails = ({ news, setIsFullNews, setNews }) => {
    const create_at = new Date(parseInt(news.post_at) * 1000);
    const classes = useStyles();
    return <Box>
        <img alt="..." className="card-img-top" src={news.thumbnail} />
        <CardContent className="card-body-avatar px-4 pb-4">
            <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                <div
                    className="avatar-icon rounded-pill"
                    onClick={() => {
                        setIsFullNews(false);
                        setNews({});
                    }}
                >
                    <img alt="..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_EegZoDttbwYhgUzMvzs2CuUlf44BOuNo3w&usqp=CAU" height="74" width="74" />
                </div>
            </div>
            <h5 className="card-title font-weight-bold font-size-xl">
                {news.title}
            </h5>
            <p className="card-text">
                {news.auther}
            </p>
            <p className="card-text">
                {create_at && create_at.getDate() + "/" + create_at.getMonth() + "/" + create_at.getFullYear()}
            </p>
            <p className="card-text">
                {news.content.trim() === "" ? news.excerpt : news.content}
            </p>
            <div className="card-date text-black-50 mt-2"></div>
            <Box p={3} display="flex" flexDirection="row-reverse">
                <Button
                    variant="contained"
                    className={classes.btnBack}
                    onClick={() => {
                        setIsFullNews(false);
                        setNews({});
                    }}
                >
                    BACK
                </Button>
            </Box>
        </CardContent>
    </Box>
};

export default NewsDetails;