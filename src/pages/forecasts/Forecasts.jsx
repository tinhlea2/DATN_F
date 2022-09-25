import React from "react";
import compose from "components/hocs/compose";
import withLayout from "components/hocs/withLayout";
import { PageTitle } from "components/layout-components";
import ListForecasts from "components/modules/forecasts/ListForecasts";
import { Card } from "@material-ui/core";

const Forecasts = () => {
    return (
        <>
            <PageTitle
                titleHeading="Forecasts"
                titleDescription="Forecasts on this page"
            ></PageTitle>
            <Card className="mb-5">
                <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-0">
                    <ListForecasts />
                </div>
            </Card>
        </>
    );
};

export default compose(
    withLayout("leftsidebar"))(Forecasts)