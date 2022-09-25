import { Box, Card, Grid, Typography } from "@material-ui/core";
import React from "react";

const areas = {
    hanoi: "https://datsohongbinhduong.com/wp-content/uploads/2017/01/ban-do-ha-noi-2.jpg",
    tay_bac_bo: "https://i2.wp.com/quyhoachvietnam.com/wp-content/uploads/2020/03/danh-sach-cac-tinh-vung-tay-bac-viet-nam.jpg?resize=618%2C455&ssl=1",
    dong_bac_bo: "https://vanchuyenachau.com.vn/wp-content/uploads/2019/11/dong-bac-bo.png",
    thanh_hoa_t_t_hue: "https://media.cungphuot.info/info/bactrungbo_crop.jpg",
    da_nang_binh_thuan: "https://baotonduoclieu.vn/public/media/media/images/vung%20duoc%20lieu/DH%20nam%20trung%20bo/vung%20duyen%20hai%20nam%20trung%20bo.png",
    tay_nguyen: "https://taynguyen.maytinhhtl.com/images/taynguyen/ban-du-du-lich-tay-nguyen-viet-nam/ban-do-du-lich-tay-nguyen-viet-nam-1.jpg",
    nam_bo: "https://media.christinas.vn/uploads/2017/05/bando.jpg",
    viet_nam: ""
};

const area = (area) => {
    if (area.trim() === "Hà Nội") {
        return areas["hanoi"];
    }
    if (area.trim() === "Phía Tây Bắc Bộ") {
        return areas["tay_bac_bo"];
    }
    if (area.trim() === "Phía Đông Bắc Bộ") {
        return areas["dong_bac_bo"];
    }
    if (area.trim() === "Thanh Hóa - Thừa Thiên Huế") {
        return areas["thanh_hoa_t_t_hue"];
    }
    if (area.trim() === "Đà Nẵng đến Bình Thuận") {
        return areas["da_nang_binh_thuan"];
    }
    if (area.trim() === "Tây Nguyên") {
        return areas["tay_nguyen"];
    }
    if (area.trim() === "Nam Bộ") {
        return areas["nam_bo"];
    }
    return areas["viet_nam"];
}

const CardWeather = ({ item }) => {
    return (
        <>
            <Card className="card-box" style={{ marginBottom: "25px", backgroundColor: "#E5FBDB" }}>
                <Grid container spacing={0}>
                    <Grid item lg={4}>
                        <div className="hero-wrapper bg-composed-wrapper h-100 rounded br-xl-left-0">
                            <div className="flex-grow-1 w-100 d-flex align-items-end">
                                <div className="bg-composed-wrapper--image rounded br-xl-left-0 opacity-9 bg-composed-filter-rm" style={{ backgroundImage: 'url(' + area(item.area) + ')', backgroundColor: "white" }} />
                                <div className="bg-composed-wrapper--content align-self-center p-4 p-xl-5">
                                    <Grid container spacing={2}>
                                        <Grid item lg={6} xs={7} sm={9}>
                                        </Grid>
                                        <Grid item lg={6} xs={5} sm={3}>
                                            <Box height="300px">
                                                <Card className="card-box-hover-rise card-box-hover rounded-lg text-center p-3 p-xl-4 d-block">
                                                    <img alt="..." className="img-fluid mx-auto" style={{ height: '80px' }} src={item.icon.trim()} />
                                                </Card>
                                            </Box>

                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={8}>
                        <div className="w-100 pt-4 pb-3">
                            <Typography variant="h4" style={{ padding: "0px 16px" }}>
                                {item.area}
                            </Typography>
                            <p className="font-size-lg px-3 my-4">
                                {item.inf_1.trim()}
                            </p>
                            <p className="font-size-lg px-3 my-4">
                                {item.inf_2.trim()}
                            </p>
                            <p className="font-size-lg px-3 my-4">
                                {item.inf_3.trim()}
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
};

export default CardWeather;