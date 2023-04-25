import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete.js";
import EditIcon from "@mui/icons-material/Edit.js";

 const TableOrder = ({orders}) => {
    return(
        <TableContainer component={Paper} sx={{ m: 1 }}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Order</TableCell>
                        <TableCell align="right">Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) =>(
                            <TableRow
                                key = {order.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.orderNumber}
                                    {order.productsIds.map((product) =>(
                                        <div key = {product.id}>
                                            {product.productName}
                                            </div>
                                    ))}

                                </TableCell>
                                <TableCell >
                                    <Stack  direction="row" spacing={2} >
                                        <Button align="right" color="error" variant="outlined" startIcon={<DeleteIcon />} >
                                        Delete
                                        </Button>
                                        <Button align="right" variant="contained" endIcon={<EditIcon />}>
                                        Edit
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default TableOrder;