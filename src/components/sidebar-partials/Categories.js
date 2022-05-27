import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
    {
        name: 'HTML',
        slug: '/HexTricks-frontend/category',
        posts: '123'
    },
    {
        name: 'CSS',
        slug: '/HexTricks-frontend/category',
        posts: '123'
    },
    {
        name: 'Javascript',
        slug: '/HexTricks-frontend/category',
        posts: '123'
    },
    {
        name: 'PHP',
        slug: '/HexTricks-frontend/category',
        posts: '123'
    },
    {
        name: 'Laravel',
        slug: '/HexTricks-frontend/category',
        posts: '123'
    },
    {
        name: 'React',
        slug: '/HexTricks-frontend/category',
        posts: '123'
    },
    
]

export default function Categories() {
    return (
        <>
            <Typography variant="h5" sx={{ marginBottom: '0.5rem' }}>Categories</Typography>
            <List>
                {
                    categories.map((category)=>(
                        <ListItem sx={{ padding: 0, borderBottom: '1px solid #eee' }}>
                            <ListItemButton component={Link} to={category.slug} sx={{ color: '#444', padding: '0.4rem 0.3rem', transition: '0.3s ease', '&:hover': {color: 'primary.light', backgroundColor: 'transparent', '.MuiListItemText-root': {color: 'primary.light'}} }}>
                                <ListItemText sx={{ color: '#555', transition: '0.3s ease', '& span': {fontWeight: '500'} }}>{category.name}</ListItemText>
                                <Typography variant='body2' fontSize='small' sx={{borderRadius: '20rem', fontSize: '0.85rem', padding: '0 0.2rem' }}>({category.posts})</Typography>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
                
            </List>
        </>
    )
}
