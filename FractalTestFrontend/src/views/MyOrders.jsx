import Button from '@mui/material/Button';
import {Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TableOrder from "../components/TableOrder.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';

function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState([]);
    const loadorders = () => {
        axios.get('http://localhost:8080/my-orders')
            .then(res => {
                    setOrders(res.data)
                }
            )
    }
    useEffect(loadorders, []);


    const deleteOrder = (order) => {
        axios
            .delete(`http://localhost:8080/my-orders/${order.id}`)
            .then((res) => {
                console.log('Item successfully deleted.');
                loadorders();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Box sx={{width: '100%'}}>
            <Grid container spacing={{md: 3}}>
                <Grid item md={9}>
                    <TableOrder orders={orders} onDelete={deleteOrder}/>
                </Grid>
                <Grid item md={3}>
                    <Link to={'/add-order/'}>
                        <Button variant="outlined" color="secondary" sx={{m: 1}}>
                            new order
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MyOrders;