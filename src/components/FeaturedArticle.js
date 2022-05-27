import { Avatar, Box, Container, Grid, Paper, styled, Typography } from '@mui/material'
import React from 'react'
import ImgAvatar from '../images/male-avatar.jpg'
import ImgPostThumb1 from '../images/blog/image2.jpg'
import { Link } from 'react-router-dom';
import AutorenewIcon from '@mui/icons-material/Autorenew';


const article = {
    title: 'Takimata at Sit Dolores Dolores Voluptua Invidunt',
    body: 'Et sit accusam dolores justo invidunt takimata diam est diam. Sed gubergren nonumy gubergren tempor lorem dolore. Magna no et dolores magna et ea eos erat, rebum diam vero sadipscing diam gubergren ut est lorem rebum. Eirmod sit dolore lorem ea aliquyam, tempor amet consetetur dolor accusam gubergren lorem no ea. Duo dolores nonumy duo erat. Duo sed sed rebum aliquyam kasd invidunt amet. Invidunt nonumy est erat sit labore erat, sed invidunt ea no rebum, et rebum clita sea ut dolores sit sit labore, no aliquyam sanctus vero no labore invidunt labore aliquyam, voluptua sed nonumy dolor gubergren takimata.',
    thumbnail: ImgPostThumb1,
    created_at: 'May 20, 2021',
    updated_at: 'May 23, 2022',
    url: '/HexTricks-frontend/articles/single',
    author: {
        name: 'Travis Howard',
        image: ImgAvatar,
        slug: '/HexTricks-frontend/author'
    },
    categories: [
        {
            name: 'html',
            slug: '/HexTricks-frontend/category'
        },
        {
            name: 'CSS',
            slug: '/HexTricks-frontend/category'
        },
        
    ]
}



const ThumbWrapper = styled('div')(({theme})=> ({
    position: 'relative',
    padding: '0',
    width: '100%',
    height: '100%',
    'img': {
        width: '120%',
        height: '100%',
        objectFit: 'cover'
    },
    '&::before': {
        pointerEvents: 'none',
        content: '""',
        background: 'linear-gradient(130deg, #ff7b2a, #af002d 41.07%, #23a6d5 76.05%)',
        position: 'absolute',
        mixBlendMode: 'screen',
        width: '120%',
        height: '100%',
        zIndex: '2',
        opacity: '0.5',
    },
    '&::after': {
        pointerEvents: 'none',
        content: '""',
        position: 'absolute',
        mixBlendMode: 'screen',
        top: 0,
        zIndex: '3',
        left: '75%',
        height: '100%',
        width: '50%',
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.013) 8.1%, rgba(255, 255, 255, 0.049) 15.5%, rgba(255, 255, 255, 0.104) 22.5%, rgba(255, 255, 255, 0.175) 29%, rgba(255, 255, 255, 0.259) 35.3%, rgba(255, 255, 255, 0.352) 41.2%, rgba(255, 255, 255, 0.45) 47.1%, rgba(255, 255, 255, 0.55) 52.9%, rgba(255, 255, 255, 0.648) 58.8%, rgba(255, 255, 255, 0.741) 64.7%, rgba(255, 255, 255, 0.825) 71%, rgba(255, 255, 255, 0.896) 77.5%, rgba(255, 255, 255, 0.951) 84.5%, rgba(255, 255, 255, 0.987) 91.9%, #fff)',
    }
    
}));


export default function FeaturedArticle() {
    return (
        <>
            <Box component='article' sx={{ marginTop: '2rem' }}>
                <Container maxWidth='xl'>
                    <Paper elevation={4} sx={{ borderRadius: '0.5rem', overflow: 'hidden' }}>
                        <Grid container spacing={0} sx={{ padding: '0' }}>
                            <Grid item xs={12} sm={6}>
                                <ThumbWrapper>
                                    <img src={article.thumbnail} alt='thumbnail' />
                                </ThumbWrapper>
                            </Grid>
                            <Grid item xs={12} sm={6} zIndex='10'>
                                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: {xs: '1.25rem', sm: '2rem 2rem 2rem 0'} }}>
                                    <Box>
                                        {
                                            article.categories.map((category)=>(
                                                <Typography 
                                                    component={Link} 
                                                    to={category.slug}
                                                    sx={{ 
                                                        display: 'inline-block',
                                                        textTransform: 'uppercase',
                                                        color: 'primary.main',
                                                        margin: '0 0.5rem 0.5rem 0',
                                                        fontWeight: '500',
                                                        '&:hover': {
                                                            color: 'primary.dark'
                                                        }
                                                     }}
                                                    >
                                                    {category.name}
                                                </Typography>
                                            ))
                                        }
                                    </Box>
                                    <Typography 
                                        variant="h3" 
                                        component={Link} 
                                        to={article.url}
                                        sx={{ 
                                            display: 'inline-block',
                                            color: '#444',
                                            transition: '0.25s ease',
                                            marginBottom: {
                                                xs: '0.75rem',
                                                md: '1rem'
                                            },
                                            fontSize: {
                                                xs: '2rem',
                                                md: '2.5rem'
                                            },
                                            '&:hover': {
                                                color: 'primary.main'
                                            }
                                         }}
                                        >
                                        {article.title}
                                    </Typography>
                                    <Typography 
                                        variant='body1'
                                        sx={{ 
                                            fontSize: {
                                                xs: '1.1rem',
                                                md: '1.15rem'
                                            },
                                            lineHeight: '1.3',
                                            color: '#666',
                                            textAlign: 'justify',
                                            marginBottom: '1.75rem',
                                         }}
                                        >
                                        {
                                            article.body.length > 280
                                            ? article.body.substring(0, 280) + "..."
                                            : article.body
                                        }
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                                        <Avatar alt="Travis Howard" src={ImgAvatar} sx={{ backgroundColor: 'primary.light', width: '42px', height:'42px', marginRight: '0.5rem' }} />
                                        <Box>
                                            <Box>
                                                <Typography variant="h6" component={Link} to={article.author.slug} sx={{ color: '#333', fontSize: {xs: '1.15rem', md: '1.25rem' }, margin: '0 0.5rem 0 0', '&:hover': {color: 'primary.main'} }}>{article.author.name}</Typography>
                                                <Typography component='span' sx={{ color: '#444' }}>on {article.created_at}</Typography>
                                            </Box>
                                            {
                                                article.created_at === article.updated_at
                                                ? 
                                                ''
                                                :
                                                <Typography sx={{ display: 'flex', color: '#444', marginTop: '0.1rem' }}>
                                                    <AutorenewIcon sx={{ marginRight: '0.25rem' }} />
                                                    Updated on {article.updated_at}
                                                </Typography>
                                            }
                                            
                                        </Box>
                                        
                                    </Box>
                                </Box>
                            </Grid>
                            
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </>
    )
}
