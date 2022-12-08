import React from "react";
import compose from "components/hocs/compose";
import withLayout from "components/hocs/withLayout";
import { PageTitle } from "components/layout-components";
import SearchNews from "components/modules/search/SearchNews";
import { Card } from "@material-ui/core";

const Search = () => {
    return (
        <>
            <PageTitle
                titleHeading="Tìm kiếm"
                titleDescription="Tìm kiếm tin tức theo tiêu đề của tin tức"
            ></PageTitle>

            <Card className="mb-5">
                <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-0">
                    <SearchNews />
                </div>
            </Card>
        </>
    );
};

export default compose(
    withLayout("leftsidebar"))(Search)