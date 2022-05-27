import { Grid } from '@mui/material'
import React from 'react'
import Categories from './sidebar-partials/Categories';
import PopularPosts from './sidebar-partials/PopularPosts';



export default function Sidebar() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={12}>
                    <PopularPosts />
                </Grid>

                <Grid item xs={12} sm={6} lg={12}>
                    <Categories />
                </Grid>
            </Grid>
        </>
    )
}
