import { CardContent, Grid } from "@material-ui/core";
import React from "react";

const topics = [
    "https://cdn.tgdd.vn/2020/04/GameApp/1587799989800-200x197.jpg",
    "https://qandme.net/images/icon-05.png",
    "https://cdn2.iconfinder.com/data/icons/space-118/512/730_management_process_production_task_work_business_elements_management-512.png",
    "https://hoithaonik.com/wp-content/uploads/2018/10/icon-dau-tu-1-6.png",
    "https://png.pngtree.com/png-vector/20191004/ourlarge/pngtree-staircase-icon-png-image_1790175.jpg",
    "https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-lightning-button-icon-png-image_537154.jpg",
    "https://whypay.vn/assets/images/billpaying/thanh-toan-tien-dien.png",
];

const CardNews = ({ news, setIsFullNews, setNews }) => {
    return (<Grid item xl={4} lg={6}>
        <a className="card card-box-hover-rise bg-white" onClick={() => {
            setIsFullNews(true);
            setNews(news);
        }}>
            <img alt="..." className="card-img-top" src={news.thumbnail} height="257px" />
            <CardContent className="card-body-avatar px-4 pb-4" style={{ height: "300px" }}>
                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                    <div className="avatar-icon rounded-pill" style={{ backgroundColor: "white" }}>
                        <img alt="..." src={topics[parseInt(news.topic_id, 10) - 1]} height="74" width="74" />
                    </div>
                </div>
                <h5 className="card-title font-weight-bold font-size-xl">
                    {news.title}
                </h5>
                <p className="card-text" style={{ textOverflow: "ellipsis", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: "6", WebkitBoxOrient: "vertical" }}>
                    {news.excerpt}
                </p>
                <div className="card-date text-black-50 mt-2"></div>
            </CardContent>
        </a>
    </Grid>)
};

export default CardNews;