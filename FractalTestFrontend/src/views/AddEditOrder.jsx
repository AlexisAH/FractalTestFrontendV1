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
    TableCell, TableBody, Grid, Box, Modal, InputLabel, Select, MenuItem
} from '@mui/material';
import {Link} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete.js";
import EditIcon from "@mui/icons-material/Edit.js";
import {DatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import TableOrder from "../components/TableOrder.jsx";
import axios from "axios";

export default function AddEditOrder() {
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
    const AddOrderForm = () => {
        const [NumberOrder, setFirstName] = useState('')
        const [ProducNumeber, setLastName] = useState('')
        const [FinalPrice, setEmail] = useState('')
        const [Products = [], setDateOfBirth] = useState('')
        const [password, setPassword] = useState('')
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

    const handleChange = (event) => {
        setProduct(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid container spacing={{md: 2}}>
                <Grid item md={6}>
                    <h2>Register Form</h2>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <form onSubmit={AddEditOrder}>
                            <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                                <TextField
                                    type="text"
                                    variant='outlined'
                                    color='secondary'
                                    label="Order"
                                    fullWidth
                                    disabled={true}
                                />
                                <TextField
                                    type="text"
                                    variant='outlined'
                                    color='secondary'
                                    label="Number of products"
                                    fullWidth
                                    disabled={true}
                                />
                            </Stack>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="Final price"
                                fullWidth
                                disabled={true}
                                sx={{mb: 4}}
                            />
                            <Stack spacing={1} direction="row" sx={{marginBottom: 4}}>
                                <DatePicker
                                    label="Date of order"
                                    value={null}
                                    type="date"
                                    format="MM-DD-YYYY"
                                    sx={{width: "100%"}}
                                    disabled={true}
                                />
                            </Stack>
                            <Stack>
                                <Grid>
                                    <Button onClick={handleOpen}>Open modal</Button>
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
                                <Grid>
                                    <Button variant="outlined" color="secondary" type="submit">Save Order</Button>
                                </Grid>
                            </Stack>
                        </form>
                    </LocalizationProvider>
                </Grid>
                <Grid item md={8}>

                </Grid>
            </Grid>
        </>
    )
}