import { Box, Container, Grid, Paper, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ImgAvatar from '../images/male-avatar.jpg'
import ImgHeadThumb from '../images/about-page-thumb.jpg'
import { Parallax } from 'react-parallax';
import Sidebar from '../components/Sidebar';
import HTMLParser from 'html-react-parser'


const PageHead = styled('div')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    padding: '2rem 0 7rem',
    height: '100%',
    background: 'linear-gradient(120deg, rgba(255, 124, 42, 0.9), rgba(238, 32, 83, 0.9) 41.07%, rgba(35, 165, 213, 0.9) 76.05%)',
    color: '#fff',
}));


const PageBodyStyles = styled('div')(({theme}) => ({
    'h1': {
        fontSize: '3.5rem'
    },

    'h3': {
        fontSize: '2.5rem',
        lineHeight: '1',
        margin: '0'
    },

    'p': {
        fontSize: '1.1rem'
    }
    
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
                    <Parallax blue={0} bgImage={ImgHeadThumb} bgImageAlt='' strength={400}>
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
                                            About Us
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
                            <Paper elevation={4} sx={{ padding: {xs: '1.25rem', md: '2rem'}, borderRadius: '0.75rem' }}>
                                <PageBodyStyles>
                                    {
                                        HTMLParser('<p>No ipsum sed eos est ipsum labore duo diam, ut aliquyam justo dolor et accusam ut ipsum ipsum sit. Labore sadipscing dolores clita et eos, dolores gubergren takimata consetetur magna, elitr eirmod sit amet ut gubergren takimata sanctus lorem, sadipscing kasd dolore et eos diam, tempor sanctus sadipscing amet et, kasd amet voluptua nonumy amet no magna vero, sit eos lorem et clita dolor nonumy labore est lorem. Nonumy no stet et et sed ipsum labore sed stet, et et et duo gubergren et erat sanctus, amet eos duo sit consetetur stet sanctus sit. Ea sit dolor ipsum diam et.</p><h3>Aliquyam ipsum vero sit accusam</h3><p>Et elitr consetetur et elitr accusam voluptua sea dolores consetetur. Diam ut lorem et erat eos duo, labore sanctus et accusam et magna stet sanctus et. Sit sea sed et amet vero stet. Est sea sit diam dolore et labore, justo diam amet ipsum lorem dolor voluptua dolor, eos gubergren sit ea rebum et lorem, dolores sed ut stet et sea labore voluptua eirmod, tempor eirmod invidunt consetetur dolor, aliquyam et est kasd et et diam at voluptua. Voluptua sit.</p>')
                                    }
                                </PageBodyStyles>
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
