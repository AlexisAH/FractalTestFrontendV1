import { useState } from 'react'
import {Routes,Route } from 'react-router-dom'
import MyOrders from "../views/MyOrders.jsx";
import AddEditOrder from "../views/AddEditOrder.jsx";
import {AppBar, Toolbar,Grid} from "@mui/material";

function App() {
  return (
      <div>
            <AppBar position="static">
                <Toolbar> </Toolbar>
             </AppBar>
              <Routes>
                  <Route path={"/my-orders"} element={<MyOrders/>}> </Route>
                  <Route path={"/add-order/:id?"} element={<AddEditOrder/>}></Route>
              </Routes>
      </div>
  )
}

export default App
