import { Avatar, Box, Card, CardActions, CardContent, CardMedia, Container, Grid, Pagination, styled, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import ImgHeaderBg from '../images/blog/image3.jpg'
import ArticleIcon from '@mui/icons-material/Article';
import Sidebar from '../components/Sidebar';
import ImgMaleAvatar from '../images/male-avatar.jpg'
import { Link } from 'react-router-dom';
import AutorenewIcon from '@mui/icons-material/Autorenew';


const PageHead = styled('div')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    padding: '2rem 0 7rem',
    height: '100%',
    background: 'linear-gradient(120deg, rgba(255, 124, 42, 0.9), rgba(238, 32, 83, 0.9) 41.07%, rgba(35, 165, 213, 0.9) 76.05%)',
    color: '#fff',
}));


const posts = [
    {
        title: 'How to Start Web Development Today?',
        url: '/articles/single',
        body: 'Consetetur stet lorem sanctus sit rebum lorem dolore nonumy sit dolor, vero clita consetetur voluptua eirmod gubergren. Sanctus erat labore dolor sit. Sea tempor ipsum dolore sit. Ipsum diam at magna erat. Sed elitr est amet lorem et takimata duo et. Sed eos no justo consetetur et sadipscing dolores gubergren sea. Ea erat nonumy accusam ea tempor, tempor labore diam no duo amet sit. Magna vero et dolor magna takimata dolor. Invidunt et lorem at tempor est diam rebum. Et dolor takimata eos lorem sit diam sed at, takimata vero takimata et lorem amet dolores ipsum diam, est diam vero at duo ipsum ipsum sanctus invidunt, consetetur voluptua dolor erat tempor est. Sadipscing gubergren et ipsum voluptua, takimata ipsum magna voluptua sadipscing dolores, et consetetur et dolor kasd rebum ea magna elitr. Stet dolore aliquyam dolore dolores diam, sea tempor eirmod takimata nonumy at, sit no et et at duo. At voluptua duo sea ut aliquyam, vero sit takimata dolores duo no sed, kasd magna amet accusam aliquyam diam. Stet sadipscing elitr est takimata diam duo at, gubergren et diam amet sea ea clita duo, tempor at sed est amet sanctus gubergren diam. Sea rebum dolor tempor voluptua lorem est amet lorem. Amet aliquyam aliquyam ut dolor lorem at. Stet invidunt duo et diam et dolores et ea, diam accusam et gubergren consetetur, eos takimata dolores et takimata dolor et sit rebum eos. Sit amet rebum justo sea sit, nonumy et sit elitr et rebum voluptua sed stet, et lorem erat rebum ipsum elitr et voluptua justo. Erat dolor et aliquyam stet eos et et eirmod stet. Amet takimata lorem dolor gubergren lorem. Duo justo erat elitr aliquyam sit sed amet, justo erat consetetur sanctus diam takimata erat ipsum voluptua amet. Diam accusam aliquyam eos voluptua at et eirmod erat.',
        image: 'https://source.unsplash.com/random',
        date: {
            create: 'May 19, 2022',
            update: 'May 19, 2022'
        },
        categories: [
            {
                name: 'Kickstart',
                url: '',
            },
            {
                name: 'Web Design',
                url: '',
            }
        ],
        author: {
            name: 'Travis Howard',
            image: ImgMaleAvatar
        },
    },
    {
        title: 'Post Title Goes Here 2',
        url: '/articles/single',
        body: 'Eos tempor no eos gubergren dolores ipsum, sit sed dolores dolore at. Ipsum est invidunt sed ut eirmod takimata erat, takimata lorem accusam labore sed sit. Magna invidunt ut voluptua magna tempor lorem aliquyam. Erat accusam invidunt et dolor lorem est ipsum, kasd diam stet magna clita dolor labore. Tempor est eos no sit accusam sea et sed, gubergren sea eos duo et voluptua ipsum, amet ipsum justo at ipsum. Nonumy tempor tempor est est amet nonumy lorem, lorem ipsum sit stet amet gubergren est sed, magna consetetur diam est ut dolore aliquyam. Ut ipsum diam stet eos tempor dolor sit, est ut voluptua dolor est kasd eirmod eos, at lorem no ut et et gubergren ipsum eirmod, lorem dolores lorem amet diam et nonumy voluptua amet no, magna et et voluptua dolor at et, dolor sed aliquyam eos rebum, no et sit clita sea diam sed, ea erat amet stet diam erat dolor, elitr at nonumy lorem ea ea, accusam eos justo et et dolore amet et et, est est vero est elitr amet kasd amet amet aliquyam, et sadipscing sanctus sea erat stet, invidunt eos sed et sed, lorem dolore labore aliquyam no takimata amet rebum. Amet sed ut et amet eos. Ipsum justo et sed magna et sanctus duo. Diam erat et kasd stet accusam, aliquyam duo nonumy nonumy amet est. Gubergren at nonumy sea eirmod lorem, diam sanctus et ipsum stet sit sit sanctus ut, kasd ea elitr amet takimata dolore clita, sit labore amet elitr nonumy eirmod, stet dolor consetetur labore rebum eos et, et amet aliquyam sed dolor clita eirmod ipsum, takimata magna magna ipsum labore sit sadipscing duo, sea diam magna at at amet sea sed et, sit takimata clita stet tempor aliquyam et elitr. Eos sit invidunt no clita ipsum sadipscing no magna, dolor et et nonumy vero nonumy dolores, duo dolor diam dolor voluptua ipsum ut et ipsum diam. Dolor sanctus sit takimata at et ipsum voluptua. Et accusam amet diam diam ut est duo, ipsum stet vero dolores no justo et dolores sed est. Amet tempor voluptua sadipscing dolor eirmod ipsum et aliquyam justo, sadipscing est clita no clita. Gubergren sanctus clita diam kasd rebum et. Ipsum dolores accusam justo ea dolor. Magna amet et aliquyam lorem eirmod clita et, ea ipsum invidunt eos eirmod stet rebum dolor. Amet et sit erat ut rebum consetetur sed vero, consetetur labore ipsum.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
        date: {
            create: 'May 19, 2022',
            update: 'Jun 10, 2022'
        },
        categories: [
            {
                name: 'PHP',
                url: '',
            },
            {
                name: 'SQL',
                url: '',
            }
        ],
        author: {
            name: 'Travis Howard',
            image: ImgMaleAvatar
        }
    },
    {
        title: 'How to Start Web Development Today?',
        url: '/articles/single',
        body: 'Consetetur stet lorem sanctus sit rebum lorem dolore nonumy sit dolor, vero clita consetetur voluptua eirmod gubergren. Sanctus erat labore dolor sit. Sea tempor ipsum dolore sit. Ipsum diam at magna erat. Sed elitr est amet lorem et takimata duo et. Sed eos no justo consetetur et sadipscing dolores gubergren sea. Ea erat nonumy accusam ea tempor, tempor labore diam no duo amet sit. Magna vero et dolor magna takimata dolor. Invidunt et lorem at tempor est diam rebum. Et dolor takimata eos lorem sit diam sed at, takimata vero takimata et lorem amet dolores ipsum diam, est diam vero at duo ipsum ipsum sanctus invidunt, consetetur voluptua dolor erat tempor est. Sadipscing gubergren et ipsum voluptua, takimata ipsum magna voluptua sadipscing dolores, et consetetur et dolor kasd rebum ea magna elitr. Stet dolore aliquyam dolore dolores diam, sea tempor eirmod takimata nonumy at, sit no et et at duo. At voluptua duo sea ut aliquyam, vero sit takimata dolores duo no sed, kasd magna amet accusam aliquyam diam. Stet sadipscing elitr est takimata diam duo at, gubergren et diam amet sea ea clita duo, tempor at sed est amet sanctus gubergren diam. Sea rebum dolor tempor voluptua lorem est amet lorem. Amet aliquyam aliquyam ut dolor lorem at. Stet invidunt duo et diam et dolores et ea, diam accusam et gubergren consetetur, eos takimata dolores et takimata dolor et sit rebum eos. Sit amet rebum justo sea sit, nonumy et sit elitr et rebum voluptua sed stet, et lorem erat rebum ipsum elitr et voluptua justo. Erat dolor et aliquyam stet eos et et eirmod stet. Amet takimata lorem dolor gubergren lorem. Duo justo erat elitr aliquyam sit sed amet, justo erat consetetur sanctus diam takimata erat ipsum voluptua amet. Diam accusam aliquyam eos voluptua at et eirmod erat.',
        image: 'https://source.unsplash.com/random',
        date: {
            create: 'May 19, 2022',
            update: 'May 19, 2022'
        },
        categories: [
            {
                name: 'Kickstart',
                url: '',
            },
            {
                name: 'Web Design',
                url: '',
            }
        ],
        author: {
            name: 'Travis Howard',
            image: ImgMaleAvatar
        },
    },
    {
        title: 'How to Start Web Development Today?',
        url: '/articles/single',
        body: 'Consetetur stet lorem sanctus sit rebum lorem dolore nonumy sit dolor, vero clita consetetur voluptua eirmod gubergren. Sanctus erat labore dolor sit. Sea tempor ipsum dolore sit. Ipsum diam at magna erat. Sed elitr est amet lorem et takimata duo et. Sed eos no justo consetetur et sadipscing dolores gubergren sea. Ea erat nonumy accusam ea tempor, tempor labore diam no duo amet sit. Magna vero et dolor magna takimata dolor. Invidunt et lorem at tempor est diam rebum. Et dolor takimata eos lorem sit diam sed at, takimata vero takimata et lorem amet dolores ipsum diam, est diam vero at duo ipsum ipsum sanctus invidunt, consetetur voluptua dolor erat tempor est. Sadipscing gubergren et ipsum voluptua, takimata ipsum magna voluptua sadipscing dolores, et consetetur et dolor kasd rebum ea magna elitr. Stet dolore aliquyam dolore dolores diam, sea tempor eirmod takimata nonumy at, sit no et et at duo. At voluptua duo sea ut aliquyam, vero sit takimata dolores duo no sed, kasd magna amet accusam aliquyam diam. Stet sadipscing elitr est takimata diam duo at, gubergren et diam amet sea ea clita duo, tempor at sed est amet sanctus gubergren diam. Sea rebum dolor tempor voluptua lorem est amet lorem. Amet aliquyam aliquyam ut dolor lorem at. Stet invidunt duo et diam et dolores et ea, diam accusam et gubergren consetetur, eos takimata dolores et takimata dolor et sit rebum eos. Sit amet rebum justo sea sit, nonumy et sit elitr et rebum voluptua sed stet, et lorem erat rebum ipsum elitr et voluptua justo. Erat dolor et aliquyam stet eos et et eirmod stet. Amet takimata lorem dolor gubergren lorem. Duo justo erat elitr aliquyam sit sed amet, justo erat consetetur sanctus diam takimata erat ipsum voluptua amet. Diam accusam aliquyam eos voluptua at et eirmod erat.',
        image: 'https://source.unsplash.com/random',
        date: {
            create: 'May 19, 2022',
            update: 'May 19, 2022'
        },
        categories: [
            {
                name: 'Kickstart',
                url: '',
            },
            {
                name: 'Web Design',
                url: '',
            }
        ],
        author: {
            name: 'Travis Howard',
            image: ImgMaleAvatar
        },
    },
    {
        title: 'How to Start Web Development Today?',
        url: '/articles/single',
        body: 'Consetetur stet lorem sanctus sit rebum lorem dolore nonumy sit dolor, vero clita consetetur voluptua eirmod gubergren. Sanctus erat labore dolor sit. Sea tempor ipsum dolore sit. Ipsum diam at magna erat. Sed elitr est amet lorem et takimata duo et. Sed eos no justo consetetur et sadipscing dolores gubergren sea. Ea erat nonumy accusam ea tempor, tempor labore diam no duo amet sit. Magna vero et dolor magna takimata dolor. Invidunt et lorem at tempor est diam rebum. Et dolor takimata eos lorem sit diam sed at, takimata vero takimata et lorem amet dolores ipsum diam, est diam vero at duo ipsum ipsum sanctus invidunt, consetetur voluptua dolor erat tempor est. Sadipscing gubergren et ipsum voluptua, takimata ipsum magna voluptua sadipscing dolores, et consetetur et dolor kasd rebum ea magna elitr. Stet dolore aliquyam dolore dolores diam, sea tempor eirmod takimata nonumy at, sit no et et at duo. At voluptua duo sea ut aliquyam, vero sit takimata dolores duo no sed, kasd magna amet accusam aliquyam diam. Stet sadipscing elitr est takimata diam duo at, gubergren et diam amet sea ea clita duo, tempor at sed est amet sanctus gubergren diam. Sea rebum dolor tempor voluptua lorem est amet lorem. Amet aliquyam aliquyam ut dolor lorem at. Stet invidunt duo et diam et dolores et ea, diam accusam et gubergren consetetur, eos takimata dolores et takimata dolor et sit rebum eos. Sit amet rebum justo sea sit, nonumy et sit elitr et rebum voluptua sed stet, et lorem erat rebum ipsum elitr et voluptua justo. Erat dolor et aliquyam stet eos et et eirmod stet. Amet takimata lorem dolor gubergren lorem. Duo justo erat elitr aliquyam sit sed amet, justo erat consetetur sanctus diam takimata erat ipsum voluptua amet. Diam accusam aliquyam eos voluptua at et eirmod erat.',
        image: 'https://source.unsplash.com/random',
        date: {
            create: 'May 19, 2022',
            update: 'May 19, 2022'
        },
        categories: [
            {
                name: 'Kickstart',
                url: '',
            },
            {
                name: 'Web Design',
                url: '',
            }
        ],
        author: {
            name: 'Travis Howard',
            image: ImgMaleAvatar
        },
    },
    {
        title: 'How to Start Web Development Today?',
        url: '/articles/single',
        body: 'Consetetur stet lorem sanctus sit rebum lorem dolore nonumy sit dolor, vero clita consetetur voluptua eirmod gubergren. Sanctus erat labore dolor sit. Sea tempor ipsum dolore sit. Ipsum diam at magna erat. Sed elitr est amet lorem et takimata duo et. Sed eos no justo consetetur et sadipscing dolores gubergren sea. Ea erat nonumy accusam ea tempor, tempor labore diam no duo amet sit. Magna vero et dolor magna takimata dolor. Invidunt et lorem at tempor est diam rebum. Et dolor takimata eos lorem sit diam sed at, takimata vero takimata et lorem amet dolores ipsum diam, est diam vero at duo ipsum ipsum sanctus invidunt, consetetur voluptua dolor erat tempor est. Sadipscing gubergren et ipsum voluptua, takimata ipsum magna voluptua sadipscing dolores, et consetetur et dolor kasd rebum ea magna elitr. Stet dolore aliquyam dolore dolores diam, sea tempor eirmod takimata nonumy at, sit no et et at duo. At voluptua duo sea ut aliquyam, vero sit takimata dolores duo no sed, kasd magna amet accusam aliquyam diam. Stet sadipscing elitr est takimata diam duo at, gubergren et diam amet sea ea clita duo, tempor at sed est amet sanctus gubergren diam. Sea rebum dolor tempor voluptua lorem est amet lorem. Amet aliquyam aliquyam ut dolor lorem at. Stet invidunt duo et diam et dolores et ea, diam accusam et gubergren consetetur, eos takimata dolores et takimata dolor et sit rebum eos. Sit amet rebum justo sea sit, nonumy et sit elitr et rebum voluptua sed stet, et lorem erat rebum ipsum elitr et voluptua justo. Erat dolor et aliquyam stet eos et et eirmod stet. Amet takimata lorem dolor gubergren lorem. Duo justo erat elitr aliquyam sit sed amet, justo erat consetetur sanctus diam takimata erat ipsum voluptua amet. Diam accusam aliquyam eos voluptua at et eirmod erat.',
        image: 'https://source.unsplash.com/random',
        date: {
            create: 'May 19, 2022',
            update: 'May 19, 2022'
        },
        categories: [
            {
                name: 'Kickstart',
                url: '',
            },
            {
                name: 'Web Design',
                url: '',
            }
        ],
        author: {
            name: 'Travis Howard',
            image: ImgMaleAvatar
        },
    }
    
];




export default class Tag extends Component {

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
                                            Articles by Tag
                                        </Typography>
                                        {/* Page Title */}
                                        <Typography 
                                            variant="h1" 
                                            sx={{ 
                                                color: '#fff', 
                                                textShadow: '0 2px 2px rgb(0, 0, 0, 0.5)',
                                                marginBottom: '1.5rem',
                                                textTransform: 'uppercase',
                                                fontSize: {
                                                    xs: '2.75rem',
                                                    sm: '3.25rem',
                                                    md: '3.5rem',
                                                    lg: '4rem'
                                                }
                                            }}
                                            >
                                            Tag Name
                                        </Typography>

                                        <Box
                                            sx={{ 
                                                backgroundColor: 'rgba(0,0,0,0.5)',
                                                padding: '0.65rem 1.2rem',
                                                borderRadius: '0.5rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                marginBottom: '0.5rem'
                                            }}
                                            >
                                            <ArticleIcon sx={{ marginRight: '0.5rem', width: '1.3rem', height: '1.3rem', color: '#f5f5f5' }} />
                                            <Typography
                                                sx={{ 
                                                    fontWeight: '500',
                                                    fontSize: {
                                                        xs: '1rem',
                                                        md: '1.05rem'
                                                    },
                                                    letterSpacing: '0.5rem',
                                                    textTransform: 'capitalize'
                                                }}
                                                >
                                                1234 articles found!
                                            </Typography>
                                        </Box>
                                        
                                        
                                    </Grid>
                                </Grid>
                                
                            </Container>
                        </PageHead>
                    </Parallax>
                </Box>


                {/* All Posts */}
                <Container maxWidth='xl'>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={9} sx={{ marginTop: '-5rem', marginBottom: {xs:'2.5rem',lg: '4rem'}, zIndex: '999' }}>
                            <Grid container columnSpacing={2.5} rowSpacing={4}>
                                {
                                    posts.map((post) => (
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <Card
                                                component='article'
                                                sx={{
                                                    height: "100%",
                                                    "&:hover": { boxShadow: "5" },
                                                    "&.MuiPaper-root": {
                                                    display: "flex",
                                                    justiyContent: "space-between",
                                                    flexDirection: "column",
                                                    height: "100%",
                                                    borderRadius: '0.85rem'
                                                    },
                                                }}
                                                >
                                                <Box 
                                                    component= {Link}
                                                    to ={post.url}
                                                    sx={{ 
                                                        display: 'block',
                                                        position: 'relative',
                                                        overflow: 'hidden',
                                                        '&::before': {
                                                            content: '""',
                                                            background: 'linear-gradient(to right bottom, #FE5201, #01ADFE)',
                                                            position: 'absolute',
                                                            width: '100%',
                                                            height: '100%',
                                                            top: '0',
                                                            left: '0',
                                                            right: '0',
                                                            bottom: '0',
                                                            zIndex: 2,
                                                            opacity: '0.3'
                                                        }
                                                    }}
                                                    >
                                                    <CardMedia
                                                        component="img"
                                                        height="200px"
                                                        image={post.image}
                                                        alt="green iguana"
                                                    />
                                                </Box>
                                                <CardContent>
                                                    <Box>
                                                        {post.categories.map((category) => (
                                                            <Typography
                                                                component={Link}
                                                                to="#"
                                                                size="small"
                                                                sx={{
                                                                    textTransform: 'uppercase',
                                                                    display: 'inline-block',
                                                                    margin: "0 0.5rem 0.5rem 0",
                                                                    fontSize: "0.8rem",
                                                                    fontWeight: '500',
                                                                    
                                                                    color: 'primary.light',
                                                                    "&:hover": { color: "primary.dark" },
                                                                }}
                                                                >
                                                                {category.name}
                                                            </Typography>
                                                        ))}
                                                    </Box>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component={Link}
                                                        to ={post.url}
                                                        sx={{
                                                            display: "inline-block",
                                                            marginBottom: "0.75rem",
                                                            color: "#333",
                                                            fontSize: "1.525rem",
                                                            lineHeight: "1.2",
                                                            transition: "color 300ms",
                                                            "&:hover": { color: "primary.light" },
                                                        }}
                                                    >
                                                        {post.title}
                                                    </Typography>
                                                    <Typography 
                                                        sx={{ 
                                                            color: '#555',
                                                            marginBottom: '0.75rem',
                                                        }}
                                                        >
                                                        {post.body.length > 180
                                                            ? post.body.substring(0, 180) + "..."
                                                            : post.body}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ marginTop: "auto", padding: '0 1.25rem 1.25rem' }} >
                                                    <Avatar 
                                                        alt={post.author.name}
                                                        src={post.author.image}
                                                        sx={{ 
                                                            width: 30, 
                                                            height: 30,
                                                            marginRight: '0'
                                                        }}
                                                    />
                                                    <Box>
                                                        <Typography 
                                                            variant='h6'
                                                            component={Link} 
                                                            to="#" 
                                                            sx={{ 
                                                                fontWeight: 700,
                                                                display: 'inline-block',
                                                                color: '#333',
                                                                marginRight: '0.5rem',
                                                                fontSize: '1.06rem',
                                                                '&:hover': {
                                                                    color: 'primary.dark'
                                                                }
                                                            }}
                                                        >
                                                            {post.author.name}
                                                        </Typography>
                                                        <Typography
                                                        variant='span' sx={{ 
                                                            color: '#444',
                                                            marginRight: '0.5rem'
                                                        }}>
                                                            on {post.date.create}
                                                        </Typography>

                                                        { post.date.create === post.date.update 
                                                            ? 
                                                            ''
                                                            :
                                                            <Typography 
                                                            variant='span' 
                                                            sx={{ 
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                color: '#444',
                                                            }}>
                                                                <AutorenewIcon sx={{ fontSize: '1.1rem' }} />Updated on {post.date.update}
                                                            </Typography>
                                                        }

                                                        
                                                        
                                                    </Box>
                                                    
                                                </CardActions>
                                            </Card>
                                        </Grid>

                                        
                                    ))
                                }


                                {/* Pagination */}
                                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                    <Pagination count={10} variant="outlined" color="primary" sx={{ '.MuiPagination-ul': {justifyContent: 'center'}, '.MuiPagination-ul li': {marginBottom: '0.25rem'} }} />
                                </Grid>
                        
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={3} sx={{ marginTop: {xs: '0', lg: '2rem'}, marginBottom: {xs: '2rem', lg: '2.5rem'} }}>
                            <Sidebar />
                        </Grid>
                    </Grid>
                </Container>

            </>
        )
    }
}
