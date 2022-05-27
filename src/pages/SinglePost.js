import { Avatar, Box, Button, Chip, Container, Grid, Paper, styled, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import ImgAvatar from '../images/male-avatar.jpg'
import ImgPostThumb1 from '../images/blog/image5.jpg'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Parallax } from 'react-parallax';
import Sidebar from '../components/Sidebar';
import HTMLParser from 'html-react-parser'
import ReplyIcon from '@mui/icons-material/Reply';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const post = {
    title: 'Takimata at Sit Dolores Dolores Voluptua Invidunt',
    body: '<p>No ipsum sed eos est ipsum labore duo diam, ut aliquyam justo dolor et accusam ut ipsum ipsum sit. Labore sadipscing dolores clita et eos, dolores gubergren takimata consetetur magna, elitr eirmod sit amet ut gubergren takimata sanctus lorem, sadipscing kasd dolore et eos diam, tempor sanctus sadipscing amet et, kasd amet voluptua nonumy amet no magna vero, sit eos lorem et clita dolor nonumy labore est lorem. Nonumy no stet et et sed ipsum labore sed stet, et et et duo gubergren et erat sanctus, amet eos duo sit consetetur stet sanctus sit. Ea sit dolor ipsum diam et.</p><h3>Aliquyam ipsum vero sit accusam</h3><p>Et elitr consetetur et elitr accusam voluptua sea dolores consetetur. Diam ut lorem et erat eos duo, labore sanctus et accusam et magna stet sanctus et. Sit sea sed et amet vero stet. Est sea sit diam dolore et labore, justo diam amet ipsum lorem dolor voluptua dolor, eos gubergren sit ea rebum et lorem, dolores sed ut stet et sea labore voluptua eirmod, tempor eirmod invidunt consetetur dolor, aliquyam et est kasd et et diam at voluptua. Voluptua sit.</p>',
    thumbnail: ImgPostThumb1,
    created_at: 'May 20, 2021',
    updated_at: 'May 23, 2022',
    url: '/HexTricks-frontend/articles/single',
    views: '1234',
    totalComments: '12',
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
        {
            name: 'React',
            slug: '/HexTricks-frontend/category'
        },
        
    ],
}

const comments = [
    {
        body: 'Clita duo et ea diam dolore dolores diam invidunt sed sed. Duo ea magna sed sanctus erat, sed ea consetetur gubergren et dolore amet. Et stet dolor sit et invidunt, rebum ipsum et justo labore sed dolor ea. Ea elitr ut no sed voluptua et. Nonumy sea ea stet clita at magna sadipscing magna. Erat amet eos ipsum at amet. Invidunt et dolore duo nonumy takimata amet labore et, vero consetetur duo dolore sadipscing est, no ipsum labore dolor eos invidunt justo ut dolor dolore. No rebum sit sea sed duo accusam sanctus duo. Magna dolores labore gubergren elitr vero.',
        created_at: '4 days ago',
        author: {
            name: 'Travis Howard',
            image: ImgAvatar
        },
        replies: [
            {
                body: 'Sit dolor sed sit aliquyam et sea. Magna lorem aliquyam justo et aliquyam sed aliquyam diam. Ipsum dolor sed labore dolores aliquyam, labore et ipsum clita tempor. Nonumy magna magna magna eirmod sed sed rebum dolor tempor. Sanctus aliquyam duo.',
                created_at: '8 days ago',
                author: {
                    name: 'Travis Howard',
                    image: ImgAvatar
                }
            },
            {
                body: 'Sit dolor sed sit aliquyam et sea. Magna lorem aliquyam justo et aliquyam sed aliquyam diam. Ipsum dolor sed labore dolores aliquyam, labore et ipsum clita tempor. Nonumy magna magna magna eirmod sed sed rebum dolor tempor. Sanctus aliquyam duo.',
                created_at: '8 days ago',
                author: {
                    name: 'Travis Howard',
                    image: ImgAvatar
                }
            },
            
        ]

    },
    {
        body: 'Clita duo et ea diam dolore dolores diam invidunt sed sed. Duo ea magna sed sanctus erat, sed ea consetetur gubergren et dolore amet. Et stet dolor sit et invidunt, rebum ipsum et justo labore sed dolor ea. Ea elitr ut no sed voluptua et. Nonumy sea ea stet clita at magna sadipscing magna. Erat amet eos ipsum at amet. Invidunt et dolore duo nonumy takimata amet labore et, vero consetetur duo dolore sadipscing est, no ipsum labore dolor eos invidunt justo ut dolor dolore. No rebum sit sea sed duo accusam sanctus duo. Magna dolores labore gubergren elitr vero.',
        created_at: '8 days ago',
        author: {
            name: 'Travis Howard',
            image: ImgAvatar
        },
        replies: [
            {
                body: 'Sit dolor sed sit aliquyam et sea. Magna lorem aliquyam justo et aliquyam sed aliquyam diam. Ipsum dolor sed labore dolores aliquyam, labore et ipsum clita tempor. Nonumy magna magna magna eirmod sed sed rebum dolor tempor. Sanctus aliquyam duo.',
                created_at: '8 days ago',
                author: {
                    name: 'Travis Howard',
                    image: ImgAvatar
                }
            }
        ]

    },
    
];

const tags = [
    {
        name: 'HTML',
        slug: '/HexTricks-frontend/tag',
    },
    {
        name: 'CSS',
        slug: '/HexTricks-frontend/tag',
    },
    {
        name: 'Web Design',
        slug: '/HexTricks-frontend/tag',
    },
    {
        name: 'Front-end',
        slug: '/HexTricks-frontend/tag',
    },
    {
        name: 'Material UI',
        slug: '/HexTricks-frontend/tag',
    },
    
]

const PostHead = styled('div')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    padding: '2rem 0 7rem',
    height: '100%',
    // background: 'linear-gradient(to top left, #FE5201, rgba(1, 174, 254, 0.25))',
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


export default function SinglePost() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });
    


    return (
        <>
            <Box component='main'>

                {/* Page Heading */}
                <Box>
                    <Parallax blue={0} bgImage={post.thumbnail} bgImageAlt={post.title} strength={400}>
                        <PostHead>
                            <Container maxWidth='xl'>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} lg={9}>
                                        {/* Categories */}
                                        <Box sx={{ marginBottom: '0.5rem' }}>
                                            {
                                                post.categories.map((category)=>(
                                                    <Typography 
                                                        component={Link} 
                                                        to={category.slug}
                                                        sx={{ 
                                                            position: 'relative',
                                                            display: 'inline-block',
                                                            textTransform: 'uppercase',
                                                            color: '#fff',
                                                            margin: '0 0.75rem 0.5rem 0',
                                                            fontWeight: '500',
                                                            fontSize: '0.9rem',
                                                            
                                                            '&::before': {
                                                                content: '""',
                                                                backgroundColor: '#f5f5f5',
                                                                height: '0.06rem',
                                                                width: '100%',
                                                                position: 'absolute',
                                                                bottom: '0',
                                                                borderRadius: '10rem',
                                                            },
                                                            '&:hover': {
                                                            },
                                                        }}
                                                        >
                                                        {category.name}
                                                    </Typography>
                                                ))
                                            }
                                        </Box>
                                        {/* Post Title */}
                                        <Typography 
                                            variant="h1" 
                                            sx={{ 
                                                color: '#fff', 
                                                textShadow: '0 2px 2px rgb(0, 0, 0, 0.5)',
                                                letterSpacing: '0.01rem',
                                                marginBottom: '2rem',
                                                fontSize: {
                                                    xs: '2.75rem',
                                                    sm: '3.25rem',
                                                    md: '3.5rem',
                                                    lg: '4rem'
                                                }
                                            }}
                                            >
                                            {post.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography component={Link} to={post.author.slug} sx={{ marginRight: '0.5rem', borderRadius: '50%' }}>
                                                <Avatar alt={post.author.name} src={post.author.image} />
                                            </Typography>
                                            <Box>
                                                <Typography 
                                                    component={Link} 
                                                    to={post.author.slug} 
                                                    variant='h6'
                                                    sx={{ 
                                                        color: '#111',
                                                        fontSize: '1.15rem',
                                                        marginRight: '1rem',
                                                        transition: '0.3s ease',
                                                        '&:hover': {
                                                            opacity: '0.7'
                                                        }
                                                    }}
                                                    >
                                                    {post.author.name}
                                                </Typography>
                                                <Typography 
                                                    component='span'
                                                    sx={{ 
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        marginRight: '1rem',
                                                        color: '#333',
                                                        fontWeight: '500',
                                                    }}
                                                    >
                                                    <CalendarMonthIcon sx={{ width: '1.1rem', height: '1.1rem', marginRight: '0.25rem' }} /> 
                                                    On {post.created_at}
                                                </Typography>
                                                <Typography 
                                                    component='span'
                                                    sx={{ 
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        marginRight: '1rem',
                                                        color: '#333',
                                                        fontWeight: '500',
                                                    }}
                                                    >
                                                    <AutorenewIcon sx={{ width: '1.1rem', height: '1.1rem', marginRight: '0.25rem' }} /> 
                                                    Updated on {post.updated_at}
                                                </Typography>
                                                <Typography 
                                                    component='span'
                                                    sx={{ 
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        marginRight: '1rem',
                                                        color: '#333',
                                                        fontWeight: '500',
                                                    }}
                                                    >
                                                    <VisibilityIcon sx={{ width: '1.1rem', height: '1.1rem', marginRight: '0.25rem' }} /> 
                                                    {post.views}
                                                </Typography>
                                                <Typography 
                                                    component='span'
                                                    sx={{ 
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        marginRight: '1rem',
                                                        color: '#333',
                                                        fontWeight: '500',
                                                    }}
                                                    >
                                                    <CommentIcon sx={{ width: '1.1rem', height: '1.1rem', marginRight: '0.25rem' }} /> 
                                                    {post.totalComments}
                                                </Typography>
                                                
                                            </Box>
                                            
                                        </Box>
                                    </Grid>
                                    
                                    
                                </Grid>
                                
                            </Container>
                        </PostHead>
                    </Parallax>
                </Box>


                <Container maxWidth='xl'>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={9} sx={{ marginTop: '-5rem', marginBottom: '4rem', zIndex: '999' }}>
                            <Paper elevation={4} sx={{ padding: {xs: '1.25rem', md: '2rem'}, borderRadius: '0.75rem' }}>
                                <PageBodyStyles>
                                    {
                                        HTMLParser(post.body)
                                    }
                                </PageBodyStyles>


                                {/* Tags */}
                                <Box sx={{ marginTop: '2rem' }}>
                                    <Typography variant='subtitle1' sx={{ display: 'inline-flex', verticalAlign: 'middle', color: 'primary.main', marginRight: '1rem', fontSize: '1.1rem', fontWeight: '500', marginBottom: '0.25rem' }} >
                                        <LocalOfferIcon sx={{ marginRight: '0.25rem' }} />
                                        Tags
                                    </Typography>
                                    {
                                        tags.map((tag)=>(
                                            <Chip 
                                                label={tag.name} 
                                                component={Link}
                                                to={tag.slug}
                                                clickable 
                                                sx={{ 
                                                    marginRight: '0.25rem',
                                                    marginBottom: '0.25rem'
                                                 }}
                                            />
                                        ))
                                    }
                                    
                                </Box>


                                {/* Comments Section */}
                                <Box sx={{ marginTop: '3.5rem' }}>
                                    <Typography 
                                        variant='h3'
                                        sx={{ 
                                            textAlign: 'center',
                                            position: 'relative',
                                            paddingBottom: '0.3rem',
                                            marginBottom: '2rem',
                                            color: '#333',
                                            fontSize: '2.5rem',
                    
                                            '&::before': {
                                                content: '""',
                                                width: '7rem',
                                                height: '0.25rem',
                                                backgroundColor: 'primary.light',
                                                position: 'absolute',
                                                left: '50%',
                                                bottom: '0',
                                                transform: 'translateX(-50%)',
                                                borderRadius: '20rem',
                                            },
                    
                                            '&::after': {
                                                content: '""',
                                                width: '1.5rem',
                                                height: '0.25rem',
                                                backgroundColor: 'primary.light',
                                                position: 'absolute',
                                                left: '50%',
                                                bottom: '-0.25rem',
                                                transform: 'translateX(-50%)',
                                            }
                                        }}
                                        >
                                        Comments 
                                    </Typography>

                                    {
                                        comments.map((comment) => (
                                            <Paper sx={{ marginBottom: '2rem', padding: '1.25rem', backgroundColor: '#fafafa', borderRadius: '0.8rem' }}>
                                                <Box
                                                    sx={{ 
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        marginBottom: '1rem'
                                                    }}
                                                    >
                                                    <Avatar alt="Travis Howard" src={ImgAvatar} sx={{ marginRight: '0.65rem', width: '44px', height: '44px' }} />
                                                    <Box>
                                                        <Typography variant='h6' sx={{ margin: 0, fontSize: '1.2rem', lineHeight: '1.2' }}>{comment.author.name}</Typography>
                                                        <Typography variant='subtitle1' fontSize='small' sx={{ fontSize: '0.85rem' }}>Shared {comment.created_at}</Typography>
                                                    </Box>
                                                </Box>
                                                <Typography sx={{ marginBottom: '1rem', color: '#555' }}>{comment.body}</Typography>
                                                <Button size="small" variant='contained' startIcon={<ReplyIcon />} sx={{ lineHight: '1', fontSize: '0.775rem', padding: '0.3rem 0.6rem', borderRadius: '0.2rem', letterSpacing: '0.02rem' }}>Reply</Button>


                                                {/* Replies */}
                                                {
                                                    comment.replies.map((reply) => (
                                                        <Box sx={{ marginTop: '2.5rem', paddingLeft: '1.25rem', borderLeft: '0.125rem solid', borderColor: 'primary.main' }}>
                                                            <Box
                                                                sx={{ 
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    marginBottom: '1rem'
                                                                }}
                                                                >
                                                                <Avatar alt={reply.author.name} src={ImgAvatar} sx={{ marginRight: '0.65rem', width: '44px', height: '44px' }} />
                                                                <Box>
                                                                    <Typography variant='h6' sx={{ margin: 0, fontSize: '1.2rem', lineHeight: '1.2' }}>{reply.author.name}</Typography>
                                                                    <Typography variant='body2' sx={{ fontSize: '0.85rem' }}>Shared {reply.created_at}</Typography>
                                                                </Box>
                                                            </Box>
                                                            <Typography sx={{ marginBottom: '1rem', color: '#555' }}>{reply.body}</Typography>
                                                        </Box>
                                                    ))
                                                }

                                            </Paper>
                                        ))
                                    }



                                    {/* Comment Form */}
                                    <Paper 
                                        component='form' 
                                        autoComplete='off'
                                        sx={{ 
                                            padding: '1.25rem', 
                                            backgroundColor: '#fafafa',
                                            borderRadius: '0.5rem',
                                            marginBottom: '1.5rem',
                                        }}
                                        >
                                        <Typography variant="h3" sx={{ fontSize: '2rem', marginBottom: '0.15rem' }}>Leave a Comment</Typography>
                                        <Typography variant='body1' mb={3}>Login required to comment on this article</Typography>
                                        <TextField 
                                            id="outlined-basic" 
                                            label="Type your comment here..." 
                                            variant="outlined" 
                                            multiline
                                            rows={7}
                                            required
                                            fullWidth 
                                            sx={{ 
                                                backgroundColor: '#fff',
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '0.8rem',
                                                }
                                            }}
                                        />
                                        <Button variant="contained" sx={{ fontSize: '0.9rem', marginTop: '1rem', padding: '0.5rem 1.5rem', letterSpacing: '0.02rem', borderRadius: '50rem' }}>Submit</Button>
                                    </Paper>

                                    
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
