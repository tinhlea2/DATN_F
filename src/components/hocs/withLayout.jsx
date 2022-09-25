import React from "react";
import MainLayout from "components/layouts/MainLayout";
import MinimalLayout from "components/layouts/MinimalLayout";
import LeftSidebarLayout from "components/layouts/LeftSidebar";
import DashboardLayout from "components/layouts/DashboardLayout";

const LayoutMap = {
  main: MainLayout,
  minimal: MinimalLayout,
  leftsidebar: LeftSidebarLayout,
  dashboard: DashboardLayout
};

const withLayout = (layout = "main") => (RouteComponent) => {
  const Layout = LayoutMap[layout];

  const Page = (props) => {
    return (
      <Layout>
        <RouteComponent {...props} />
      </Layout>
    );
  };
  return Page;
};

export default withLayout;
