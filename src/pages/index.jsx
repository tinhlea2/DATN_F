import React from "react";
import compose from "components/hocs/compose";
import withLayout from "components/hocs/withLayout";
import { PageTitle } from "components/layout-components";
import HomeNews from "components/modules/home/HomeNews";

const Home = () => {
  return (
    <>
      <PageTitle
        titleHeading="Home News"
        titleDescription="See the new news on this page"
      ></PageTitle>

      <HomeNews />
    </>
  );
};

export default compose(
  withLayout("leftsidebar"))(Home)