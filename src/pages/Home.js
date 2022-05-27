import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import FeaturedArticle from '../components/FeaturedArticle'
import RecentPosts from '../components/RecentPosts'
import Sidebar from '../components/Sidebar'

export default function Home() {
	return (
		<>
			<FeaturedArticle />
			<Box component='main' sx={{ marginTop: '3rem', marginBottom: '2rem' }}>
                <Container maxWidth='xl'>
                    <Grid container spacing={4.25}>

                        {/* Posts */}
                        <Grid item xs={12} lg={9}>
                            <RecentPosts />
                        </Grid>

                        {/* Sidebar */}
                        <Grid item xs={12} lg={3}>
                            <Sidebar />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Box>
		</>
	)
}
