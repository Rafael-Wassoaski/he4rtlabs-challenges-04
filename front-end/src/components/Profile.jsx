import React from "react";
import {Typography, Container, Box, DataGrid} from "@material-ui/core";
import {Table} from "material-ui";

const Profile = () => {
    return (
        <Container maxWidth="sm">
            <Container maxWidth="sm">
                <Typography variant={'h1'} component={'h1'}>Meu nome</Typography>
                <Typography variant={'h3'} component={'h3'}>Meu email</Typography>
            </Container>

            <Box component={'div'}>
               <Table>

               </Table>

            </Box>
        </Container>

    )
}

export default Profile;