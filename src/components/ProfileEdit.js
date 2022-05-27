import { Avatar, Box, Button, Container, Grid, Paper, Stack, styled, TextField, Typography } from '@mui/material'
import React, { Component } from 'react'
import ImgMaleAvatar from '../images/male-avatar.jpg'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({
    display: 'none',
});

export default class ProfileEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: ImgMaleAvatar
        }
    }

    handleChange =(event)=> {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
    }


    render() {
        return (
        <>
            <Container maxWidth='xl'>
                <Paper elevation={5} sx={{ margin: '2rem 0', padding: {xs: '1.5rem', lg: '2rem'}, borderRadius: '1rem' }}>
                    <Typography variant='h4' mb='1.5rem'>Edit Profile</Typography>
                    <Box
                        component='form'
                        noValidate
                        onSubmit=''
                        >
                        <Grid container rowSpacing={4} columnSpacing={2}>
                            <Grid item xs={12}>
                                <Stack direction='row' alignItems='center' spacing={2}>
                                    <Avatar alt="Travis Howard" src={this.state.file} sx={{ width: '7rem', height: '7rem', boxShadow: '3' }} />
                                    <label htmlFor="contained-button-file">
                                        <Input accept="image/*" id="contained-button-file" type="file" onChange={this.handleChange} />
                                        <Button variant="contained" component="span" size='small' startIcon={<PhotoCameraIcon />} sx={{  padding: '0.55rem 0.9rem', lineHeight: '1' }}>
                                            Change
                                        </Button>
                                    </label>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id='name'
                                    label='Name'
                                    name='name'
                                    autoComplete='name'
                                    autoFocus
                                    defaultValue='Travis Howard'
                                    sx={{ 
                                        
                                        '.MuiInputBase-root': {
                                            borderRadius: '0.5rem',
                                        }
                                    }}
                                    // onChange={()=>this.}
                                /> 
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id='profession'
                                    label='Profession'
                                    name='profession'
                                    autoComplete='profession'
                                    defaultValue='Web Designer'
                                    sx={{ 
                                        
                                        '.MuiInputBase-root': {
                                            borderRadius: '0.5rem',
                                        }
                                    }}
                                /> 
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id='bio'
                                    label='Bio'
                                    name='profession'
                                    autoComplete='bio'
                                    defaultValue='Invidunt sadipscing nonumy clita eos amet. Amet est sed dolor vero labore. Diam dolore sit labore tempor dolor magna dolor, dolor lorem et invidunt est, nonumy sea vero dolore at sit labore. Ea stet lorem eirmod dolor sed lorem. Sanctus elitr justo dolores gubergren ipsum dolore rebum. Diam vero et.'
                                    multiline 
                                    rows={5}
                                    sx={{ 
                                        
                                        '.MuiInputBase-root': {
                                            borderRadius: '0.5rem',
                                        }
                                    }}
                                /> 
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id='facebook_url'
                                    label='Facebook URL'
                                    name='facebook_url'
                                    autoComplete='facebook_url'
                                    defaultValue='https://facebook.com'
                                    sx={{ 
                                        
                                        '.MuiInputBase-root': {
                                            borderRadius: '0.5rem',
                                        }
                                    }}
                                /> 
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id='twitter_url'
                                    label='Twitter URL'
                                    name='twitter_url'
                                    autoComplete='twitter_url'
                                    defaultValue='https://twitter.com'
                                    sx={{ 
                                        
                                        '.MuiInputBase-root': {
                                            borderRadius: '0.5rem',
                                        }
                                    }}
                                /> 
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id='instagram_url'
                                    label='Instagram URL'
                                    name='instagram_url'
                                    autoComplete='instagram_url'
                                    defaultValue='https://twitter.com'
                                    sx={{ 
                                        
                                        '.MuiInputBase-root': {
                                            borderRadius: '0.5rem',
                                        }
                                    }}
                                /> 
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id='linkedin_url'
                                    label='Linkedin URL'
                                    name='linkedin_url'
                                    autoComplete='linkedin_url'
                                    defaultValue='https://linkedin.com'
                                    sx={{ 
                                        
                                        '.MuiInputBase-root': {
                                            borderRadius: '0.5rem',
                                        }
                                    }}
                                /> 
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id='github_url'
                                    label='Github URL'
                                    name='github_url'
                                    autoComplete='github_url'
                                    defaultValue='https://github.com'
                                    sx={{ 
                                        
                                        '.MuiInputBase-root': {
                                            borderRadius: '0.5rem',
                                        }
                                    }}
                                /> 
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id='codepen_url'
                                    label='Codepen URL'
                                    name='codepen_url'
                                    autoComplete='codepen_url'
                                    defaultValue='https://codepen.com'
                                    sx={{ 
                                        
                                        '.MuiInputBase-root': {
                                            borderRadius: '0.5rem',
                                        }
                                    }}
                                /> 
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id='youtube_url'
                                    label='Youtube URL'
                                    name='youtube_url'
                                    autoComplete='youtube_url'
                                    defaultValue='https://youtube.com'
                                    sx={{ 
                                        
                                        '.MuiInputBase-root': {
                                            borderRadius: '0.5rem',
                                        }
                                    }}
                                /> 
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id='website_url'
                                    label='Website URL'
                                    name='website_url'
                                    autoComplete='website_url'
                                    defaultValue='https://example.com'
                                    sx={{ 
                                        
                                        '.MuiInputBase-root': {
                                            borderRadius: '0.5rem',
                                        }
                                    }}
                                /> 
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ py: 1.5, px: 3, borderRadius: '50rem' }}
                                    >
                                    Save changes
                                </Button>
                            </Grid>
                        </Grid>
                        
                    </Box>
                </Paper>
            </Container>
        </>
        )
    }
}
