import React from 'react';
import compose from "components/hocs/compose";
import withLayout from "components/hocs/withLayout";

import PageError4041 from 'components/PageError404/PageError4041';
const PageError404 = () => {
  return (
    <>
      <PageError4041 />
    </>
  );
}

export default compose(withLayout("leftsidebar"))(PageError404)