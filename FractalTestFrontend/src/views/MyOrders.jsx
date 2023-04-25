import Button from '@mui/material/Button';
import {Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TableOrder from "../components/TableOrder.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import AddEditOrder from "./AddEditOrder.jsx";


function MyOrders() {
    const [orders, setOrders] = useState([]);
    const loadorders = () => {
        axios.get('http://localhost:8080/my-orders')
            .then(res => {
                    console.log(res)
                    setOrders(res.data)
                }
            )
    }

    useEffect(loadorders, []);
    console.log(orders)
    return (
        <Box sx={{width: '100%'}}>
            <Grid container spacing={{md: 3}}>
                <Grid item md={9}>
                    <TableOrder orders={orders}/>
                </Grid>
                <Grid item md={3}>
                    <Button color="secondary" href="http://127.0.0.1:5173/add-order" sx={{m: 1}}>
                        new order
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MyOrders;