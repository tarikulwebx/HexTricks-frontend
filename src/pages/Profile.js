import { Avatar, Box, Button, Container, Grid, IconButton, Stack, styled, Tooltip, Typography } from '@mui/material';
import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import ImgHeaderBg from '../images/category-page-thumb.jpg'
import ImgMaleAvatar from '../images/male-avatar.jpg'
import { FaFacebookF, FaGithub, FaTwitter, FaGlobe, FaLinkedinIn, FaYoutube, FaEnvelope, FaCodepen, FaInstagram } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';


const PageHead = styled('div')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    padding: '2rem 0 0',
    height: '100%',
    background: 'linear-gradient(120deg, rgba(255, 124, 42, 0.9), rgba(238, 32, 83, 0.9) 41.07%, rgba(35, 165, 213, 0.9) 76.05%)',
    color: '#fff',
}));

const socialLinks = [
    {
        title: 'Facebook',
        url: 'https://facebook.com',
        icon: <FaFacebookF />,
    },
    {
        title: 'Twitter',
        url: 'https://twitter.com',
        icon: <FaTwitter />,
    },
    {
        title: 'Instagram',
        url: 'https://instagram.com',
        icon: <FaInstagram />,
    },
    {
        title: 'Linkedin',
        url: 'https://linkedin.com',
        icon: <FaLinkedinIn />,
    },
    {
        title: 'Github',
        url: 'https://github.com',
        icon: <FaGithub />,
    },
    {
        title: 'Codepen',
        url: 'https://codepen.com',
        icon: <FaCodepen />,
    },
    {
        title: 'Email',
        url: 'mailto:example@gmail.com',
        icon: <FaEnvelope />,
    },
    
    {
        title: 'Youtube',
        url: 'https://youtube.com',
        icon: <FaYoutube />,
    },
    
    {
        title: 'Website',
        url: 'https://google.com',
        icon: <FaGlobe />,
    },
    
]





export default class Profile extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
        <>
            {/* Page Heading */}
            <Box>
                <Parallax blue={0} bgImage={ImgHeaderBg} bgImageAlt='' strength={400}>
                    <PageHead>
                        <Container maxWidth='xl'>
                            <Grid container spacing={4}>
                                <Grid item xs={12} lg={9}>
                                    {/* Page Subtitle */}
                                    <Typography 
                                        variant='subtitle1'
                                        sx={{ 
                                            fontSize: {
                                                xs: '1.25rem',
                                                md: '1.3rem'
                                            },
                                            fontWeight: '700',
                                            letterSpacing: '0.02em',
                                            textShadow: '0 2px 2px rgb(0, 0, 0, 0.3)'
                                            }}
                                        >
                                        Account Profile
                                    </Typography>
                                    {/* Page Title */}
                                    <Box
                                        sx={{ 
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '1rem'
                                        }}
                                        >
                                        <Avatar alt="Travis Howard" src={ImgMaleAvatar} sx={{ width: '4rem', height: '4rem', boxShadow: '3', marginRight: '0.75rem' }} />
                                        <Typography 
                                            variant="h1" 
                                            sx={{ 
                                                color: '#fff', 
                                                textShadow: '0 2px 2px rgb(0, 0, 0, 0.5)',
                                                margin: '0',
                                                textTransform: 'uppercase',
                                                fontSize: {
                                                    xs: '2.75rem',
                                                    sm: '3.25rem',
                                                    md: '3.5rem',
                                                    lg: '4rem'
                                                }
                                            }}
                                            >
                                            Travis Howard
                                        </Typography>
                                    </Box>

                                    <Typography 
                                        variant="body" 
                                        color="initial"
                                        sx={{ 
                                            display: 'block',
                                            color: 'rgba(255, 255, 255, 0.95)',
                                            textShadow: '0 1px 1px rgb(0, 0, 0, 0.4)',
                                            fontSize: '1.1rem',
                                            marginBottom: '1rem'
                                        }}
                                        >
                                        Invidunt sadipscing nonumy clita eos amet. Amet est sed dolor vero labore. Diam dolore sit labore tempor dolor magna dolor, dolor lorem et invidunt est, nonumy sea vero dolore at sit labore. Ea stet lorem eirmod dolor sed lorem. Sanctus elitr justo dolores gubergren ipsum dolore rebum. Diam vero et.
                                    </Typography>
                                    
                                    {/* Social Links */}
                                    <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap', marginBottom: '3rem' }}>
                                        {
                                            socialLinks.map((social)=>(
                                                <Tooltip title={social.title} arrow placement='top'>
                                                    <IconButton aria-label={social.title} size='small' component={Link} to={social.url} target='_blank' sx={{ backgroundColor: 'rgba(255, 255, 255, 0.975)', color: '#333', padding: '0.575rem', boxShadow: '2', '&:hover': {backgroundColor: '#fff', boxShadow: '5'}}}>
                                                        {social.icon}
                                                    </IconButton>
                                                </Tooltip>
                                            ))
                                        } 
                                    </Stack>

                                    {/* Profile Menu */}
                                    <Stack direction='row' sx={{ flexWrap: 'wrap', marginBottom: '1rem' }}>
                                        <Button 
                                            component={Link}
                                            to='/HexTricks-frontend/profile'
                                            variant="text" 
                                            startIcon={<PersonIcon />} 
                                            sx={{ 
                                                color: '#fff',
                                                marginRight: '1rem',
                                                textShadow: '0 2px 2px rgb(0, 0, 0, 0.4)',
                                            }}
                                            >
                                            Profile
                                        </Button>
                                        <Button 
                                            component={Link}
                                            to='edit'
                                            variant="text" 
                                            startIcon={<EditIcon />} 
                                            sx={{ 
                                                color: '#fff',
                                                marginRight: '1rem',
                                                textShadow: '0 2px 2px rgb(0, 0, 0, 0.4)',
                                            }}
                                            >
                                            Edit profile
                                        </Button>
                                        <Button 
                                            component={Link}
                                            to='history'
                                            variant="text" 
                                            startIcon={<HistoryIcon />} 
                                            sx={{ 
                                                color: '#fff',
                                                marginRight: '1rem',
                                                textShadow: '0 2px 2px rgb(0, 0, 0, 0.4)', 
                                            }}
                                            >
                                            Reading History
                                        </Button>
                                        <Button 
                                            component={Link}
                                            to='#'
                                            variant="text" 
                                            startIcon={<LogoutIcon />} 
                                            sx={{ 
                                                color: '#fff',
                                                marginRight: '1rem',
                                                textShadow: '0 2px 2px rgb(0, 0, 0, 0.4)', 
                                            }}
                                            >
                                            Logout
                                        </Button>
                                        
                                    </Stack>
                                    
                                </Grid>
                            </Grid>
                            
                        </Container>
                    </PageHead>
                </Parallax>
            </Box>

            <Outlet />

        </>
        )
    }
}
