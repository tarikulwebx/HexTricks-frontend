import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';



const popularPosts = [
    {
        title: 'How to Start Web Development Today?',
        url: '/articles/single',
        body: 'Consetetur stet lorem sanctus sit rebum lorem dolore nonumy sit dolor, vero clita consetetur voluptua eirmod gubergren. Sanctus erat labore dolor sit. Sea tempor ipsum dolore sit. Ipsum diam at magna erat. Sed elitr est amet lorem et takimata duo et. Sed eos no justo consetetur et sadipscing dolores gubergren sea. Ea erat nonumy accusam ea tempor, tempor labore diam no duo amet sit. Magna vero et dolor magna takimata dolor. Invidunt et lorem at tempor est diam rebum. Et dolor takimata eos lorem sit diam sed at, takimata vero takimata et lorem amet dolores ipsum diam, est diam vero at duo ipsum ipsum sanctus invidunt, consetetur voluptua dolor erat tempor est. Sadipscing gubergren et ipsum voluptua, takimata ipsum magna voluptua sadipscing dolores, et consetetur et dolor kasd rebum ea magna elitr. Stet dolore aliquyam dolore dolores diam, sea tempor eirmod takimata nonumy at, sit no et et at duo. At voluptua duo sea ut aliquyam, vero sit takimata dolores duo no sed, kasd magna amet accusam aliquyam diam. Stet sadipscing elitr est takimata diam duo at, gubergren et diam amet sea ea clita duo, tempor at sed est amet sanctus gubergren diam. Sea rebum dolor tempor voluptua lorem est amet lorem. Amet aliquyam aliquyam ut dolor lorem at. Stet invidunt duo et diam et dolores et ea, diam accusam et gubergren consetetur, eos takimata dolores et takimata dolor et sit rebum eos. Sit amet rebum justo sea sit, nonumy et sit elitr et rebum voluptua sed stet, et lorem erat rebum ipsum elitr et voluptua justo. Erat dolor et aliquyam stet eos et et eirmod stet. Amet takimata lorem dolor gubergren lorem. Duo justo erat elitr aliquyam sit sed amet, justo erat consetetur sanctus diam takimata erat ipsum voluptua amet. Diam accusam aliquyam eos voluptua at et eirmod erat.',
        image: 'https://source.unsplash.com/random',
        date: {
            create: 'May 19, 2022',
            update: 'May 19, 2022'
        },
        views: '1234',
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
        views: '1234',
    },
    {
        title: 'Dolore diam dolor voluptua sit amet',
        url: '/articles/single',
        body: 'Consetetur stet lorem sanctus sit rebum lorem dolore nonumy sit dolor, vero clita consetetur voluptua eirmod gubergren. Sanctus erat labore dolor sit. Sea tempor ipsum dolore sit. Ipsum diam at magna erat. Sed elitr est amet lorem et takimata duo et. Sed eos no justo consetetur et sadipscing dolores gubergren sea. Ea erat nonumy accusam ea tempor, tempor labore diam no duo amet sit. Magna vero et dolor magna takimata dolor. Invidunt et lorem at tempor est diam rebum. Et dolor takimata eos lorem sit diam sed at, takimata vero takimata et lorem amet dolores ipsum diam, est diam vero at duo ipsum ipsum sanctus invidunt, consetetur voluptua dolor erat tempor est. Sadipscing gubergren et ipsum voluptua, takimata ipsum magna voluptua sadipscing dolores, et consetetur et dolor kasd rebum ea magna elitr. Stet dolore aliquyam dolore dolores diam, sea tempor eirmod takimata nonumy at, sit no et et at duo. At voluptua duo sea ut aliquyam, vero sit takimata dolores duo no sed, kasd magna amet accusam aliquyam diam. Stet sadipscing elitr est takimata diam duo at, gubergren et diam amet sea ea clita duo, tempor at sed est amet sanctus gubergren diam. Sea rebum dolor tempor voluptua lorem est amet lorem. Amet aliquyam aliquyam ut dolor lorem at. Stet invidunt duo et diam et dolores et ea, diam accusam et gubergren consetetur, eos takimata dolores et takimata dolor et sit rebum eos. Sit amet rebum justo sea sit, nonumy et sit elitr et rebum voluptua sed stet, et lorem erat rebum ipsum elitr et voluptua justo. Erat dolor et aliquyam stet eos et et eirmod stet. Amet takimata lorem dolor gubergren lorem. Duo justo erat elitr aliquyam sit sed amet, justo erat consetetur sanctus diam takimata erat ipsum voluptua amet. Diam accusam aliquyam eos voluptua at et eirmod erat.',
        image: 'https://source.unsplash.com/random',
        date: {
            create: 'May 19, 2022',
            update: 'May 19, 2022'
        },
        views: '1234',
    },
    {
        title: 'Ut voluptua takimata tempor sea clita',
        url: '/articles/single',
        body: 'Consetetur stet lorem sanctus sit rebum lorem dolore nonumy sit dolor, vero clita consetetur voluptua eirmod gubergren. Sanctus erat labore dolor sit. Sea tempor ipsum dolore sit. Ipsum diam at magna erat. Sed elitr est amet lorem et takimata duo et. Sed eos no justo consetetur et sadipscing dolores gubergren sea. Ea erat nonumy accusam ea tempor, tempor labore diam no duo amet sit. Magna vero et dolor magna takimata dolor. Invidunt et lorem at tempor est diam rebum. Et dolor takimata eos lorem sit diam sed at, takimata vero takimata et lorem amet dolores ipsum diam, est diam vero at duo ipsum ipsum sanctus invidunt, consetetur voluptua dolor erat tempor est. Sadipscing gubergren et ipsum voluptua, takimata ipsum magna voluptua sadipscing dolores, et consetetur et dolor kasd rebum ea magna elitr. Stet dolore aliquyam dolore dolores diam, sea tempor eirmod takimata nonumy at, sit no et et at duo. At voluptua duo sea ut aliquyam, vero sit takimata dolores duo no sed, kasd magna amet accusam aliquyam diam. Stet sadipscing elitr est takimata diam duo at, gubergren et diam amet sea ea clita duo, tempor at sed est amet sanctus gubergren diam. Sea rebum dolor tempor voluptua lorem est amet lorem. Amet aliquyam aliquyam ut dolor lorem at. Stet invidunt duo et diam et dolores et ea, diam accusam et gubergren consetetur, eos takimata dolores et takimata dolor et sit rebum eos. Sit amet rebum justo sea sit, nonumy et sit elitr et rebum voluptua sed stet, et lorem erat rebum ipsum elitr et voluptua justo. Erat dolor et aliquyam stet eos et et eirmod stet. Amet takimata lorem dolor gubergren lorem. Duo justo erat elitr aliquyam sit sed amet, justo erat consetetur sanctus diam takimata erat ipsum voluptua amet. Diam accusam aliquyam eos voluptua at et eirmod erat.',
        image: 'https://source.unsplash.com/random',
        date: {
            create: 'May 19, 2022',
            update: 'May 19, 2022'
        },
        views: '1234',
    },
    {
        title: 'At ut amet sit et.',
        url: '/articles/single',
        body: 'Consetetur stet lorem sanctus sit rebum lorem dolore nonumy sit dolor, vero clita consetetur voluptua eirmod gubergren. Sanctus erat labore dolor sit. Sea tempor ipsum dolore sit. Ipsum diam at magna erat. Sed elitr est amet lorem et takimata duo et. Sed eos no justo consetetur et sadipscing dolores gubergren sea. Ea erat nonumy accusam ea tempor, tempor labore diam no duo amet sit. Magna vero et dolor magna takimata dolor. Invidunt et lorem at tempor est diam rebum. Et dolor takimata eos lorem sit diam sed at, takimata vero takimata et lorem amet dolores ipsum diam, est diam vero at duo ipsum ipsum sanctus invidunt, consetetur voluptua dolor erat tempor est. Sadipscing gubergren et ipsum voluptua, takimata ipsum magna voluptua sadipscing dolores, et consetetur et dolor kasd rebum ea magna elitr. Stet dolore aliquyam dolore dolores diam, sea tempor eirmod takimata nonumy at, sit no et et at duo. At voluptua duo sea ut aliquyam, vero sit takimata dolores duo no sed, kasd magna amet accusam aliquyam diam. Stet sadipscing elitr est takimata diam duo at, gubergren et diam amet sea ea clita duo, tempor at sed est amet sanctus gubergren diam. Sea rebum dolor tempor voluptua lorem est amet lorem. Amet aliquyam aliquyam ut dolor lorem at. Stet invidunt duo et diam et dolores et ea, diam accusam et gubergren consetetur, eos takimata dolores et takimata dolor et sit rebum eos. Sit amet rebum justo sea sit, nonumy et sit elitr et rebum voluptua sed stet, et lorem erat rebum ipsum elitr et voluptua justo. Erat dolor et aliquyam stet eos et et eirmod stet. Amet takimata lorem dolor gubergren lorem. Duo justo erat elitr aliquyam sit sed amet, justo erat consetetur sanctus diam takimata erat ipsum voluptua amet. Diam accusam aliquyam eos voluptua at et eirmod erat.',
        image: 'https://source.unsplash.com/random',
        date: {
            create: 'May 19, 2022',
            update: 'May 19, 2022'
        },
        views: '1234',
    },
    
];

export default function PopularPosts() {
  return (
    <>
        <Typography variant="h5" sx={{ marginBottom: '0.5rem' }}>Popular Posts</Typography>
        <List>
            {
                popularPosts.map((post)=> (
                    <Paper sx={{ marginBottom: '0.5rem', padding: '0.5rem', }}>
                        <ListItem
                            disableGutters
                            sx={{ 
                                alignItems: 'start',
                                padding: 0
                            }}
                            >
                            <ListItemAvatar  sx={{ marginRight: '0.75rem' }}>
                                <Avatar 
                                    component={Link} 
                                    to={post.url}
                                    sx={{ 
                                        width: '80px', 
                                        height: '54px', 
                                        borderRadius: '0.25rem',
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
                                    alt='Thumb' 
                                    src={post.image} 
                                />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography 
                                    variant='h6' 
                                    component={Link} 
                                    to={post.url}
                                    sx={{ 
                                        display: 'inline-block',
                                        color: '#222', 
                                        lineHeight: '1.35', 
                                        fontSize: '1rem', 
                                        fontWeight: '400',
                                        margin: '0 0 0.35rem',
                                        transition: '0.25s ease',
                                        '&:hover': {
                                            color: 'primary.main'
                                        }
                                        }}
                                    >
                                    {post.title}
                                </Typography>
                                
                                <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        flexDirection: 'row', 
                                        alignItems: 'center' 

                                        }}
                                    >
                                    {/* <Typography variant='body2' sx={{ marginRight: '0.65rem', fontSize: '0.8rem', color: '#666' }}>{post.date.create}</Typography> */}
                                    <VisibilityIcon sx={{ width: '0.925rem', height: '0.925rem', color: '#999', marginRight: '0.2rem' }} />
                                    <Typography variant='body2' sx={{ fontSize: '0.8rem', color: '#666' }}>{post.views} views</Typography>
                                </Box>
                                
                            </ListItemText>
                        </ListItem>
                    </Paper>
                ))
            }
            
        </List>
    </>
  )
}
