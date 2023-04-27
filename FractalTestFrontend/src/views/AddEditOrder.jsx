import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

import {
    TextField,
    Button,
    Container,
    Stack,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell, TableBody, Grid, Box, Modal, InputLabel, Select, MenuItem, FormControl
} from '@mui/material';
import axios from "axios";

export default function AddEditOrder(onSubmit) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [AddOrderForm, setOrderform] = useState({
        NumberOrder: "",
        ProducNumber: "",
        Date: "",
        FinalPrice: "",
        Products: "",
    })
    const handleChange = (event) => {
        const data = {...AddOrderForm}
            [event.target.id] = event.target.value
        setOrderform(data)
    }
    const _onSubmit = (order) => {
        onSubmit(order);
    }

    const onSubmite = (order) => {
        if (order) {
            axios.put(`http://localhost:8080/my-orders/${order.id}`, order)
                .then((res) => {
                    console.log('Order successfully updated.')
                    loadorders();
                }).catch((error) => {
                console.log(error)
            })
        } else {
            axios.post('http://localhost:8080/my-orders', order)
                .then((res) => {
                        console.log('Order successfully created.')
                        loadorders();
                    }
                ).catch((error) => {
                console.log(error)
            })
        }
    }

    const {id} = useParams()
    const [isEdit, setIsEdit] = useState(!!id)//id?true:false


    const [products, setProducts] = useState([]);
    const loadproducts = () => {
        axios.get('http://localhost:8080/products')
            .then(res => {
                    console.log(res)
                    setProducts(res.data)
                }
            )
    }

    useEffect(loadproducts, []);
    const [product, setProduct] = React.useState('');


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid container spacing={{md: 1}} align="center">
                <Grid item md={6}>
                    <h2>Order Form</h2>
                    <FormControl onSubmit={_onSubmit}>
                        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                            <TextField
                                id="NumberOrder"
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="Order"
                                fullWidth

                                value={AddOrderForm.NumberOrder}
                                onChange={e => handleChange(e)}
                            />
                            <TextField
                                id="ProducNumber"
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="Number of products"
                                fullWidth

                                value={AddOrderForm.ProducNumber}
                                onChange={e => handleChange(e)}
                            />
                        </Stack>
                        <TextField
                            id="FinalPrice"
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Final price"
                            fullWidth

                            sx={{mb: 4}}
                        />
                        <Stack spacing={1} direction="row" sx={{marginBottom: 4}}>
                            <TextField
                                id="date"
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="date"
                                fullWidth

                                sx={{mb: 4}}
                            />
                        </Stack>
                        <Stack>
                            <Grid>
                                <Button variant="outlined" onClick={handleOpen}>Add Product</Button>
                                <Modal
                                    keepMounted
                                    open={open}

                                    aria-labelledby="keep-mounted-modal-title"
                                    aria-describedby="keep-mounted-modal-description"
                                >
                                    <Box sx={style}>
                                        <InputLabel id="demo-simple-select-label">Product</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={product}
                                            label="Product"
                                            onChange={handleChange}
                                            sx={{minWidth: 120}}
                                        >
                                            {
                                                products.map((product) => (
                                                    <MenuItem key={product.id} value={product.id}>
                                                        product : {product.productName}
                                                    </MenuItem>
                                                ))
                                            }
                                        </Select>
                                        <TextField
                                            type="text"
                                            variant='outlined'
                                            color='secondary'
                                            label="cantidad"
                                            fullWidth
                                        />
                                        <Button onClick={handleClose}>Add Product</Button>
                                    </Box>
                                </Modal>
                            </Grid>

                        </Stack>
                        <Grid item md={12}>
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

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid>
                            <Button variant="outlined" color="secondary" type="submit">Save Order</Button>
                        </Grid>
                    </FormControl>
                </Grid>

            </Grid>
        </>
    )
}