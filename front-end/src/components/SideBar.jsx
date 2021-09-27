import React from "react";
import {AppBar} from 'material-ui';
import CssBaseline from '@mui/material/CssBaseline';
import {Drawer} from "material-ui";


const SideBar = ()=>{

    return(
        <Box sx={{display: 'flex'}}>

            <CssBaseline/>
            <AppBar
            position='fixed'
            sx={{width:`calc(100% - ${240}px)`}}
            >

            </AppBar>


        </Box>
    )
}

export default SideBar;