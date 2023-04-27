import React from 'react';
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton, Link,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete.js';
import EditIcon from '@mui/icons-material/Edit.js';

const TableOrder = ({orders, onDelete}) => {

    return (
        <TableContainer component={Paper} sx={{m: 1}}>
            <Table sx={{minWidth: 250}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Order</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Number of Products</TableCell>
                        <TableCell align="right">Final price</TableCell>
                        <TableCell align="right">Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow
                            key={order.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row" align="right">
                                {order.orderNumber}
                                {order.productsIds.map((product) => (
                                    <div key={product.id}>{product.productName}</div>
                                ))}
                            </TableCell>
                            <TableCell align="right">{order.id}</TableCell>
                            <TableCell align="right">{order.productNumber}</TableCell>
                            <TableCell align="right">{order.finalPrice}</TableCell>
                            <TableCell align="right">
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => {
                                        onDelete(order)
                                    }}
                                >
                                    <DeleteIcon/>
                                </IconButton>
                                <Link to={`/edit-order/${order.id}`}>
                                    <IconButton
                                        aria-label="edit"
                                    >
                                        <EditIcon/>
                                    </IconButton>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableOrder;
