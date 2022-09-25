import React from "react";
import {
    Box,
    Typography,
    Button
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

const SearchNotFound = () => {
    return (
        <Box style={{ textAlign: "center" }}>
            <Typography variant="h4" style={{ paddingBottom: "10px", paddingTop: "100px" }}>
                Search news not found
            </Typography>
            <Button style={{ color: "#35B6B8" }}>
                <AddIcon style={{ color: "violet" }} />
                    CREATE NEW NOTIFICATION
                </Button>
        </Box>
    );
};

export default SearchNotFound;