import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const postReads = [
    {
        title: 'How to Start Web Development today?',
        url: '#',
        time: '10:32 PM',
        date: 'Thursday, May 26, 2022'
    },
    {
        title: 'How to Start Web Development today?',
        url: '#',
        time: '10:32 PM',
        date: 'Thursday, May 26, 2022'
    },
    {
        title: 'How to Start Web Development today?',
        url: '#',
        time: '10:32 PM',
        date: 'Thursday, May 26, 2022'
    },
    {
        title: 'How to Start Web Development today?',
        url: '#',
        time: '10:32 PM',
        date: 'Thursday, May 26, 2022'
    },
    {
        title: 'How to Start Web Development today?',
        url: '#',
        time: '10:32 PM',
        date: 'Thursday, May 26, 2022'
    },
    {
        title: 'How to Start Web Development today?',
        url: '#',
        time: '10:32 PM',
        date: 'Thursday, May 26, 2022'
    },
    {
        title: 'How to Start Web Development today?',
        url: '#',
        time: '10:32 PM',
        date: 'Thursday, May 26, 2022'
    },
    {
        title: 'How to Start Web Development today?',
        url: '#',
        time: '10:32 PM',
        date: 'Thursday, May 26, 2022'
    },
    {
        title: 'How to Start Web Development today?',
        url: '#',
        time: '10:32 PM',
        date: 'Thursday, May 26, 2022'
    },
    {
        title: 'How to Start Web Development today?',
        url: '#',
        time: '10:32 PM',
        date: 'Thursday, May 26, 2022'
    },
    
]

export default class History extends Component {
    render() {
        return (
        <>
            <Container maxWidth='xl'>
                <Paper elevation={5} sx={{ margin: '2rem 0', padding: {xs: '1.5rem', lg: '2rem'}, borderRadius: '1rem' }}>
                    <Typography variant='h4' mb='1.5rem'>Reading History</Typography>
                    
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Article</TableCell>
                                    <TableCell align="left">Time</TableCell>
                                    <TableCell align="left">Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {postReads.map((post)=>(
                                    <TableRow
                                        key={post.title}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row">
                                            <Typography component={Link} to='/single' sx={{ color: '#333', transition: '0.25s ease', '&:hover': {color: 'primary.light'} }}>{post.title}</Typography>
                                        </TableCell>
                                        <TableCell align="left">{post.time}</TableCell>
                                        <TableCell align="left">{post.date}</TableCell>
                                        
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </>
        )
    }
}
