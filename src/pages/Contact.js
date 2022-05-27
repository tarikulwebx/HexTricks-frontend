import { Box, Button, Container, Grid, Paper, styled, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ImgAvatar from '../images/male-avatar.jpg'
import ImgPageThumbnail from '../images/contact-page-thumb.jpg'
import { Parallax } from 'react-parallax';
import Sidebar from '../components/Sidebar';
import SendIcon from '@mui/icons-material/Send';


const PageHead = styled('div')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    padding: '2rem 0 7rem',
    height: '100%',
    background: 'linear-gradient(120deg, rgba(255, 124, 42, 0.9), rgba(238, 32, 83, 0.9) 41.07%, rgba(35, 165, 213, 0.9) 76.05%)',
    color: '#fff',
}));


export default function Page() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });
    


    return (
        <>
            <Box component='main'>

                {/* Page Heading */}
                <Box>
                    <Parallax blue={0} bgImage={ImgPageThumbnail} bgImageAlt='' strength={500}>
                        <PageHead>
                            <Container maxWidth='xl'>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} lg={9}>

                                        {/* Page Title */}
                                        <Typography 
                                            variant="h1" 
                                            sx={{ 
                                                color: '#fff', 
                                                textShadow: '0 2px 2px rgb(0, 0, 0, 0.5)',
                                                marginBottom: '0.5rem',
                                                textTransform: 'uppercase',
                                                fontSize: {
                                                    xs: '2.75rem',
                                                    sm: '3.25rem',
                                                    md: '3.5rem',
                                                    lg: '4rem'
                                                }
                                            }}
                                            >
                                            Contact Us
                                        </Typography>
                                    </Grid>
                                    
                                    
                                </Grid>
                                
                            </Container>
                        </PageHead>
                    </Parallax>
                </Box>


                <Container maxWidth='xl'>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={9} sx={{ marginTop: '-5rem', marginBottom: '4rem', zIndex: '999' }}>
                            <Paper elevation={4} sx={{ padding: {xs: '1.25rem', md: '2.5rem'}, borderRadius: '0.75rem' }}>
                                <Typography variant='h3' mb='0.25rem'>Send message</Typography>
                                <Typography variant='body1' mb='1.75rem'>
                                    Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
                                </Typography>
                                <Box
                                    component='form'
                                    autoComplete='off'
                                    >
                                    <Grid container rowSpacing={3} columnSpacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField id='' label="Your name" variant='outlined' fullWidth />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField id='' label="Email" variant='outlined' fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField id='' label="Subject" variant='outlined' fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField id='' label="Your message" variant='outlined' multiline rows={7} fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" sx={{ fontWeight: '500', padding: '0.5rem 1.25rem' }} startIcon={<SendIcon />}>
                                                Send
                                            </Button>
                                        </Grid>
                                        
                                    </Grid>
                                </Box>



                                


                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={3} sx={{ marginTop: {xs: '1.5rem', lg: '2rem'}, marginBottom: {xs: '2rem', lg: '2.5rem'} }}>
                            <Sidebar />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            
        </>
    )
}
