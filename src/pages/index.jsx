import React from "react";
import compose from "components/hocs/compose";
import withLayout from "components/hocs/withLayout";
import { PageTitle } from "components/layout-components";
import HomeNews from "components/modules/home/HomeNews";

const Home = () => {
  return (
    <>
      <PageTitle
        titleHeading="Trang chủ tin tức"
        titleDescription="Tin tức điện lực mới nhất luôn được cập nhật"
      ></PageTitle>

      <HomeNews />
    </>
  );
};

export default compose(
  withLayout("leftsidebar"))(Home)