import { CardContent, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ListTopicNews from "./ListTopicNews";
import { useDispatch } from "react-redux";
import { getlistTopicNews, newsActions } from "state/modules/news/newsSlice";
import useNotification from "utils/hooks/notification";

const TopicsNews = () => {
    const [isListTopic, setIsListTopic] = useState(false);
    const dispatch = useDispatch();
    const [topic, setTopic] = useState([]);
    const [isGet, setIsGet] = useState(true);
    const [topicId, setTopicId] = useState(1);
    const { showError } = useNotification();
    useEffect(() => {
        setIsGet(true);;
        dispatch(newsActions.getlistTopicNews({
            onComplete: (error, data) => {
                setIsGet(false);
                if (!error) {
                    console.log(data.results);
                    setTopic(data.results);
                    setIsGet(false);
                    console.log(data.results);
                    return;
                }
                const errorMessages = Object.values(error).join(". ");
                return showError(errorMessages);
            }
        }));
    }, [dispatch]);
    return (isListTopic
        ? <ListTopicNews topicId={topicId} setIsListTopic={setIsListTopic} />
        : <div className="example-card-seamless mb-spacing-6">
            <div className="mb-spacing-6">
                <Grid container spacing={6}>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 1) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            })   
                        }}>
                            <img alt="..." className="card-img-top" src="https://img.timviecdientu.com/2019/08/trien-vong-nganh-dien-tu-vien-thong-4.jpg" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill">
                                        <img alt="..." src="https://cdn.tgdd.vn/2020/04/GameApp/1587799989800-200x197.jpg" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    Tin tức
                            </h5>
                                <p className="card-text">
                                    Bao gồm các bản tin chung đang được
                                    quan tâm, hội nghị, từ thiện,
                                    tin tức điện lực thế giới và các bản tin liên quan.
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 2) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            });
                        }}>
                            <img alt="..." className="card-img-top" src="https://image.sggp.org.vn/w840/Uploaded/2020/evofjasfzyr/2019_12_09/1_7_obgt.gif" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill">
                                        <img alt="..." src="https://qandme.net/images/icon-05.png" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    Thông tin và sự kiện
                            </h5>
                                <p className="card-text">
                                    Bao gồm các bản tin liên quan đến
                                    thị trường điện lực trong nước và
                                    và các sự kiện
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 3) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            })
                        }}>
                            <img alt="..." className="card-img-top" src="https://www.evn.com.vn/userfile/User/thuhatcdl/images/2019/6/khaiquatthuydien.jpg" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill" style={{ backgroundColor: "white" }}>
                                        <img alt="..." src="https://cdn2.iconfinder.com/data/icons/space-118/512/730_management_process_production_task_work_business_elements_management-512.png" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    Sản xuất kinh doanh
                            </h5>
                                <p className="card-text">
                                    Bao gồm các bản tin liên quan đến sản xuất
                                    kinh doang điện lực, quy mô,
                                    nguồn đầu tư và lĩnh vực sản xuất.
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 2) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            })
                        }}>
                            <img alt="..." className="card-img-top" src="https://www.evn.com.vn/userfile/User/xuantien/images/2022/11/Anh3CPMB12112022(1).jpg" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill" style={{ backgroundColor: "white" }}>
                                        <img alt="..." src="https://hoithaonik.com/wp-content/uploads/2018/10/icon-dau-tu-1-6.png" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    Đầu tư xây dựng
                            </h5>
                                <p className="card-text">
                                    Bao gồm các bản tin liên quan đến đầu tư
                                    xây dựng điện lực nước nhà,
                                    quy mô, nguồn đầu tư và lĩnh vực đầu tư.
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 5) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            })
                        }}>
                            <img alt="..." className="card-img-top" src="https://congthuong.vn/stores/news_dataimages/thanhhuong/062018/07/16/95f4c7f8fa7123a27964e35b98dddc46_1f.jpg" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill">
                                        <img alt="..." src="https://png.pngtree.com/png-vector/20191004/ourlarge/pngtree-staircase-icon-png-image_1790175.jpg" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    Công nghệ và môi trường
                            </h5>
                                <p className="card-text">
                                    Bao gồm các bản tin liên quan đến công nghệ và môi 
                                    trường,
                                    hướng phát triển của doanh nghiệp đã và đang.
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 4) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            })
                        }}>
                            <img alt="..." className="card-img-top" src="https://hanoimoi.com.vn/Uploads/images/phananh/2020/07/02/dien.jpg" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill">
                                        <img alt="..." src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-lightning-button-icon-png-image_537154.jpg" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    Chuyển động năng lượng
                            </h5>
                                <p className="card-text">
                                    Bao gồm các bản tin liên quan đến năng
                                    lượng trong ngành điện lực nước nhà,
                                    sự phát triển của các loại năng lượng.
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                </Grid>
            </div>
        </div>);
};

export default TopicsNews;