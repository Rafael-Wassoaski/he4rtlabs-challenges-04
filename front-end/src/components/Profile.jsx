import React, {useState, useEffect} from "react";
import {Typography, Box, Grid, Button, Input} from "@material-ui/core";

const Profile = () => {

    const [pokemons, setPokemons] = useState([]);
    function cadastrar(data){
        console.log(data)
    }

    useEffect(() => {
    })


    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item  xs={6}>
                <Typography variant={'h1'} component={'h1'}>Meu nome</Typography>
                <Typography variant={'h3'} component={'h3'}>Meu email</Typography>
            </Grid>

            <Grid item xs={6}>
                <Box component={'div'}>
                    <table style={{width: "100%"}}>
                        <tbody>
                        <tr>

                            <td style={{borderStyle: "double", borderColor: "black"}}>
                                teste
                            </td>
                            <td>
                                teste
                            </td>
                            <td>
                                teste
                            </td>
                            <td>
                                teste
                            </td>
                            <td>
                                teste
                            </td>
                            <td>
                                teste
                            </td>
                            <td>
                                teste
                            </td>
                            <td>
                                teste
                            </td>
                            <td>
                                teste
                            </td>
                            <td>
                                teste
                            </td>

                        </tr>
                        </tbody>
                    </table>

                </Box>
            </Grid>
            <Grid>
                <form onSubmit={cadastrar} style={{direction: "row"}} method={"POST"} action={"http://localhost:3001/api/user/signin"}>
                    <Input fullWidth={true} type={'text'} color={'primary'} name={'userName'} placeholder={'Nome de usuário'}/>
                    <Input fullWidth={true} type={'email'} color={'primary'} name={'email'} placeholder={'Email'}/>
                    <Input fullWidth={true} type={'password'} color={'primary'} name={'password'} placeholder={'Senha'}/>
                    <Input fullWidth={true} type={'password'} color={'primary'} name={'passwordConfirm'} placeholder={'Confirm sua senha'}/>
                    <Button style={{marginTop: 10}} variant="contained" type={'submit'}>Cadastre-se</Button>
                </form>
            </Grid>
        </Grid>

    )
}

export default Profile;