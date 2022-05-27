import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

export default class Register extends Component {
    render() {
        return (
        <>
            <Container maxWidth='xl '>
                <Paper elevation={3} sx={{ margin: {xs: '2rem 0', lg: '3rem 0'}, borderRadius: '0.5rem', overflow: 'hidden' }}>
                    <Grid container>
                        <Grid 
                            item
                            xs={false}
                            sm={4}
                            md={6}
                            sx={{
                                backgroundImage: 'url(https://source.unsplash.com/random)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={8} md={6} elevation={6} square>
                            <Box sx={{ padding: '2rem' }}>
                                <Avatar sx={{ m: 1, bgcolor: 'primary.main', margin: '0 auto 0.5rem' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography 
                                    component='h1' 
                                    variant='h4'
                                    sx={{ 
                                        textAlign: 'center',
                                        marginBottom: '0.5rem'
                                     }}
                                    >
                                    Account Register
                                </Typography>
                                <Box
                                    component='form'
                                    noValidate
                                    onSubmit=''
                                    >
                                    <TextField
                                        margin='normal'
                                        required
                                        fullWidth
                                        id='name'
                                        label='Name'
                                        name='name'
                                        autoComplete='name'
                                        autoFocus
                                        sx={{ 
                                            
                                            '.MuiInputBase-root': {
                                                borderRadius: '50rem',
                                            }
                                        }}
                                    />
                                    <TextField
                                        margin='normal'
                                        required
                                        fullWidth
                                        id='email'
                                        label='Email Address'
                                        name='email'
                                        autoComplete='email'
                                        sx={{ 
                                            
                                            '.MuiInputBase-root': {
                                                borderRadius: '50rem',
                                            }
                                        }}
                                    />
                                    <TextField
                                        margin='normal'
                                        required
                                        fullWidth
                                        id='password'
                                        label='Password'
                                        name='password'
                                        type='password'
                                        autoComplete='current-password'
                                        sx={{ 
                                            
                                            '.MuiInputBase-root': {
                                                borderRadius: '50rem',
                                            }
                                        }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" size='small' />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, py: 1, borderRadius: '50rem' }}
                                        >
                                        Sign Up
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Typography component={Link} to='' variant='body2' sx={{ transition: '0.25s ease', '&:hover': {color: 'primary.light'} }}>
                                                Forgot password?
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography component={Link} to='' variant='body2'  sx={{ transition: '0.25s ease', '&:hover': {color: 'primary.light'} }}>
                                                Already have an account? Login
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
        )
    }
}
