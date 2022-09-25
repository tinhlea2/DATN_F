import React from 'react';

import { Button, Tooltip } from '@material-ui/core';

const SidebarFooter = () => {
  return (
    <>
      <div className="app-sidebar--footer">
        <ul>
          <li>
            <Tooltip title="Overview Dashboard" arrow placement="top">
              <Button
                variant="text"
                className="btn-transition-none mx-2 d-40 p-0">
              </Button>
            </Tooltip>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarFooter;
