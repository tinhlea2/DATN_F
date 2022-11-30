import React, {useState } from "react";
import { Box, Button, CardContent } from "@material-ui/core";
import { useStyles } from "components/modules/publics/styles";

const NewsDetails = ({ news, setImage, setIsFullNews, setNews }) => {
    const classes = useStyles();
    const create_at = new Date(parseInt(news.post_at) * 1000);
    // setImages={setImage}
    // const [image, setImage] = useState({})
    return <div>
        {/* <img alt="..." className="card-img-top" src={news.thumbnail} /> */}
        <div  className="card-body-avatar px-4 pb-4">
            <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                <div
                    className="avatar-icon rounded-pill"
                    onClick={() => {
                        setIsFullNews(false);
                        setNews({});
                        // console.log(setImage);
                    }}
                >
                    {/* <img alt="..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_EegZoDttbwYhgUzMvzs2CuUlf44BOuNo3w&usqp=CAU" height="74" width="74" /> */}
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
            <div className="card-text">
                {news.excerpt}
            </div>
            <span className="card-body-avatar px-4 pb-4">
                    {
                        // const text = news.images.value();
                        news.contents.map((value ,i) => 
                    {
                        if (value.order==i) 
                        return <div>
                            <p>{value.contents}</p>
                            <img className="card-img-top" src={value.src} height="74" width="74"/>
                            <h6 className="avatar-initials" >{value.title}</h6>
                        </div>
                    })}

                </span>
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
        </div>
    </div>
};

export default NewsDetails;