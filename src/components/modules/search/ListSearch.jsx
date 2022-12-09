import React from "react";
import {
    Box,
    Container,
    Table,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const ListSearch = ({ listNews, setIsFullNews, setNews }) => {
    return <Container maxWidth="xl">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Box py={2}>
                <Table className="table table-alternate-spaced">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center"></th>
                            <th style={{ width: '300px' }} scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listNews.map(value => {
                            const create_at = new Date(parseInt(value.post_at) * 1000);
                            return (<><tr key={value.id} onClick={() => {
                                setIsFullNews(true);
                                setNews(value);
                            }}>
                                <td className="text-center text-black-50">
                                    {/* <span>{value.id}</span> */}
                                    <img alt="..." className="card-img-wrapper" src={value.thumbnail} height="60px" width="100px" />
                                </td>
                                <td>
                                    <b>{value.title}</b>
                                    <span className="d-block text-black-50 font-size-sm">{value.auther}</span>
                                </td>
                                <td>
                                    <span>{create_at && create_at.getDate() + "/" + create_at.getMonth() + "/" + create_at.getFullYear()}</span>
                                </td>
                                <td className="text-right">
                                    <a
                                        className="btn-neutral-first mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                                        onClick={() => {
                                            setIsFullNews(true);
                                            setNews(value);
                                        }}
                                    >
                                        {/* <FontAwesomeIcon icon={['fas', 'edit']} className="font-size-sm" /> */}
                                        {/* <a>Chi tiết</a> */}
                                    </a>
                                </td>
                            </tr>
                                <tr className="divider"></tr></>)
                        })}
                    </tbody>
                </Table>
            </Box>
        </MuiPickersUtilsProvider>
    </Container>
};

export default ListSearch;