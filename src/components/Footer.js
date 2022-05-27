import {  Box, Container, Grid, List, ListItem, styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import ImgColoredLogo from '../images/colored-logo.svg'



const FooterTitle = styled(Typography)(({theme}) => ({
    fontWeight: '700',
    fontSize: '1.15rem',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    color: theme.palette.primary.light,
    marginBottom: '0.25rem'
}));


// Column 1 Info
const col1SiteInfo = {
    logo: ImgColoredLogo,
    name: 'Hex-Tricks',
    description: 'Clita eirmod dolore clita sit diam lorem sit lorem dolor, stet dolores eos ipsum rebum sit ut lorem invidunt. Aliquyam dolor amet lorem sed. No voluptua at amet sanctus sanctus.'
}

// Column 2 Info
const col2Menu = [
    {
        title: 'Info',
        menuItems: [
            {
                name: 'About Us',
                slug: '/about',
            },
            {
                name: 'Privacy Policy',
                slug: '#',
            },
            {
                name: 'Terms & Conditions',
                slug: '#',
            },
            
        ]
    }
];

// Column 3 Info
const col3Menu = [
    {
        title: 'Membership',
        menuItems: [
            {
                name: 'Login',
                slug: '#',
            },
            {
                name: 'Application',
                slug: '#',
            },
            {
                name: 'Members',
                slug: '#',
            },
            
        ]
    }
];

// Column 4 Info
const col4Menu = [
    {
        title: 'Support',
        menuItems: [
            {
                name: 'FAQ',
                slug: '#',
            },
            {
                name: 'Newsletter',
                slug: '#',
            },
            {
                name: 'Contact Us',
                slug: '#',
            },
            
        ]
    }
];





export default function Footer() {
    return (
        <>
            <Box component='footer'>

                {/* Footer Top */}
                <Box sx={{ backgroundColor: '#f5f5f5', padding: '3.5rem 0' }}>
                    <Container maxWidth='xl'>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                    <Box component='img' src={col1SiteInfo.logo} sx={{ height: '35px', marginRight: '0.4rem' }}></Box>
                                    <Typography variant="h4" sx={{ textTransform: 'uppercase', color: 'primary.light', lineHeight: '1', display: 'inline-block', margin: '0' }}>{col1SiteInfo.name}</Typography>
                                </Box>
                                
                                <Typography variant="body1" sx={{ fontSize: '0.95rem', color: '#666'}}>{col1SiteInfo.description}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                {
                                    col2Menu.map((menu)=>(
                                    <Box>
                                        <FooterTitle>{menu.title}</FooterTitle>
                                        <List>
                                            {
                                                menu.menuItems.map((item)=>(
                                                    <ListItem component={Link} to={item.slug} sx={{ padding: '0.25rem 0', color: '#555', '&:hover': {color: 'primary.main' }}} >
                                                        {item.name}
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </Box>
                                    ))
                                }

                                
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                {
                                    col3Menu.map((menu)=>(
                                    <Box>
                                        <FooterTitle>{menu.title}</FooterTitle>
                                        <List>
                                            {
                                                menu.menuItems.map((item)=>(
                                                    <ListItem component={Link} to={item.slug} sx={{ padding: '0.25rem 0', color: '#555', '&:hover': {color: 'primary.main' }}} >
                                                        {item.name}
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </Box>
                                    ))
                                }

                                
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                {
                                    col4Menu.map((menu)=>(
                                    <Box>
                                        <FooterTitle>{menu.title}</FooterTitle>
                                        <List>
                                            {
                                                menu.menuItems.map((item)=>(
                                                    <ListItem component={Link} to={item.slug} sx={{ padding: '0.25rem 0', color: '#555', '&:hover': {color: 'primary.main' }}} >
                                                        {item.name}
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </Box>
                                    ))
                                }

                                
                            </Grid>
                            
                            
                        </Grid>
                    </Container>
                </Box>

                {/* Footer Copyright */}
                <Box sx={{ backgroundColor: '#eee', padding: '1.75rem 0' }}>
                    <Container maxWidth='xl'>
                        <Typography px={{ textAlign: 'center', color: '#555',   }}>Copyright &copy;{new Date().getFullYear()} all right reserved by <Typography component={Link} to='#' sx={{ color: 'primary.light', fontWeight: '500', letterSpacing: '0.02em', '&:hover': {color: 'primary.dark'} }}>Tarikul</Typography></Typography>
                    </Container>
                </Box>
                
            </Box>
        </>
    )
}
