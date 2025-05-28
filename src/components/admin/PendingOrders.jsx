import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch, useSelector } from "react-redux";
import { orderAction } from "@/store/orders";
import { Button } from "@mui/material";

import { createSelector } from 'reselect';

function createData(id,user, orderDate, totalPrice, status, items) {
    return {
      id,
        user,
        orderDate,
        totalPrice,
        status,
        items, // for collapsible part
    };
}

function Row({ row }) {
    const dispatch = useDispatch();
    const handleDeliver = (id) => {
        dispatch(orderAction.deliverOrder(id));
    };
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell>{row.user.email}</TableCell>
                <TableCell align="right">
                    {new Date(row.orderDate).toLocaleDateString()}
                </TableCell>
                <TableCell align="right">${row.totalPrice}</TableCell>
                <TableCell sx={{color:"DarkOrange"}} align="right">{row.status}</TableCell>
                <TableCell align="right">
                    <Button sx={{fontWeight:700,}} onClick={() => handleDeliver(row.id)}>
                        Deliver Order
                    </Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                Order Items
                            </Typography>
                            <Table size="small" aria-label="items">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item Name</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell align="right">
                                            Price
                                        </TableCell>
                                        <TableCell align="right">
                                            Total Price
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.items.map((item, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell>{item.title}</TableCell>
                                            <TableCell>
                                                {item.quantity}
                                            </TableCell>
                                            <TableCell align="right">
                                                {item.price}
                                            </TableCell>
                                            <TableCell align="right">
                                                {item.quantity * item.price}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const selectOrderItems = (state) => state.order.items;
const selectPendingOrders = createSelector(
  [selectOrderItems],
  (items) => items.filter(item => !item.delivered)
);

export { selectPendingOrders };

export default function PendingOrders() {
    const pendingOrders = useSelector(selectPendingOrders);

    const rows = pendingOrders.map((order) =>
        createData(
          order.id,
            order.user,
            order.orderDate,
            order.totalPrice,
            order.delivered ? "Delivered" : "Pending",
            order.items
        )
    );

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>User Email</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Total Price</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, idx) => (
                        <Row key={idx} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
