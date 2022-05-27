import { alpha, AppBar, Avatar, Box, Button, ButtonBase, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputBase, Menu, MenuItem, styled, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

// Images 
import ImgMaleAvatar from  '../images/male-avatar.jpg'
import ImgLogo from  '../images/logo.svg'

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// Menu Items
const menuItems = [
    {
        name: 'Home',
        slug: '/',
        icon: <HomeIcon sx={{ marginRight: '0.4rem', width: '1.25rem', height: '1.25rem' }} />
    },
    {
        name: 'Articles',
        slug: '/articles',
        icon: <ArticleIcon sx={{ marginRight: '0.4rem', width: '1.25rem', height: '1.25rem' }} />
    },
    {
        name: 'Contact',
        slug: '/contact',
        icon: <ContactPageIcon sx={{ marginRight: '0.4rem', width: '1.25rem', height: '1.25rem' }} />
    },
    {
        name: 'About',
        slug: '/about',
        icon: <InfoIcon sx={{ marginRight: '0.4rem', width: '1.25rem', height: '1.25rem' }} />
    },
    
];


// Styled Components

const Search = styled('div')(({ theme, searchOpen }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: "0.75rem",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },

    [theme.breakpoints.down('sm')]: {
        display: searchOpen ? 'flex': 'none',
        width: '80%',
        position: 'absolute',
        right: 0,
        backgroundColor: theme.palette.primary,
        opacity: 1,
        zIndex: 99,
        marginRight: 0,
    },

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        zIndex: 999,
        color: 'black',
    }
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        '&::placeholder': {
            opacity: 0.75,
        },
        [theme.breakpoints.up('sm')]: {
            width: '15ch',
            '&:focus': {
                width: '20ch',
            },
        },

        [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.primary.contrastText,
            color: "black",
            borderRadius: ".325rem",
            
        }
    },

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    }
}));


const SearchButton = styled(IconButton)(({ theme }) => ({
    color: "white",
    marginRight: "0.25rem",
    padding: "0.75rem",
    backgroundColor: "transparent",

    [theme.breakpoints.up('sm')]: {
        display: "none"
    }

}));

const SearchCancelWrapper = styled(IconButton)(({ theme }) => ({

    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        padding: theme.spacing(0, 1),
        height: '100%',
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
        color: '#777',
    },
    [theme.breakpoints.up('sm')]: {
        display: 'none',
        zIndex: 999,
        color: '#777',
    }
    
}));

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [searchOpen, setSearchOpen] = React.useState(false);


    // Logout Dialog handle
    const [logoutDialogOpen, setLogoutDialogOpen] = React.useState(false);

    const handleClickLogoutDialogOpen =()=>{
        setLogoutDialogOpen(true);
    }
    const handleLogoutDialogClose =()=>{
        setLogoutDialogOpen(false);
    }
    

    return (
        <AppBar position="static" variant='success'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Brand Icon for large device */}
                    <ButtonBase
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                        mr: 3,
                        display: { xs: 'none', md: 'flex' },
                        alignItems: "center",
                        fontWeight: 700,
                        letterSpacing: '0',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        <img style={{ "marginRight": "0.5rem" }} src={ImgLogo} width="35" height="35" alt="logo" />
                        <Typography variant='h5'>HEX-TRICKS</Typography>
                        
                    </ButtonBase>

                    {/* Page Menu for small devices */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ paddingLeft: {xs: '0'} }}
                        >
                            <MenuIcon sx={{ width: "1.1em", height: '1.1em' }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {
                                menuItems.map((item)=>(
                                    <MenuItem  onClick={handleCloseNavMenu}>
                                        <Typography component={Link} to={item.slug} textAlign="center" sx={{ display: 'flex', alignItems: 'center', color: '#444' }}>
                                            {item.icon}
                                            {item.name}
                                        </Typography>
                                    </MenuItem>
                                ))
                            }
                            
                        </Menu>
                    </Box>

                    {/* Brand Icon for small device */}
                    <ButtonBase
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                        mr: 0,
                        display: { xs: 'flex', md: 'none' },
                        alignItems: 'center',
                        flexGrow: 1,
                        fontWeight: 700,
                        letterSpacing: '0',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        <img style={{ "marginRight": "0.5rem" }} src={ImgLogo} width="25" height="25" alt="" />
                        <Typography variant='h6' noWrap>HEX-TRICKS</Typography>
                    </ButtonBase>

                    {/* Page Menu for large device */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {
                            menuItems.map((item)=>(
                                <Button component={Link} to={item.slug} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', fontSize: '0.875rem' }} >
                                    {item.name}
                                </Button>
                            ))
                        }
                    </Box>

                    {/* Search Toggler of small device */}
                    <SearchButton onClick={()=>setSearchOpen(true)}>
                        <SearchIcon />
                    </SearchButton>

                    <Search searchOpen={searchOpen}>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <SearchCancelWrapper onClick={()=>setSearchOpen(false)}>
                            <CancelIcon />
                        </SearchCancelWrapper>
                    </Search>

                    {/* Profile Menu */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Profile settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={ImgMaleAvatar} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu} >
                                <Typography component={Link} to='/profile' textAlign="center" sx={{ display: 'flex', alignItems: 'center', color: '#444' }}>
                                <AccountCircleIcon sx={{ marginRight: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
                                    Profile
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} >
                                <Typography component={Link} to='/login' textAlign="center" sx={{ display: 'flex', alignItems: 'center', color: '#444' }}>
                                <LoginIcon sx={{ marginRight: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
                                    Login
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} >
                                <Typography component={Link} to='/register' textAlign="center" sx={{ display: 'flex', alignItems: 'center', color: '#444' }}>
                                <PersonAddIcon sx={{ marginRight: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
                                    Register
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} >
                                <Typography component={Link} to='#' textAlign="center" sx={{ display: 'flex', alignItems: 'center', color: '#444' }}>
                                <DashboardIcon sx={{ marginRight: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
                                    Dashboard
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} >
                                <Typography component='div'  textAlign="center" onClick={handleClickLogoutDialogOpen} sx={{ display: 'flex', alignItems: 'center', color: '#444' }}>
                                    <LogoutIcon sx={{ marginRight: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
                                    Logout
                                </Typography>
                            </MenuItem>

                            {/* Logout Dialog */}
                            <Dialog
                                open={logoutDialogOpen}
                                onClose={handleLogoutDialogClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                >
                                <DialogTitle id="alert-dialog-title">
                                    Logout
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure you want to logout your account?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleLogoutDialogClose}>Cancel</Button>
                                    <Button onClick={handleLogoutDialogClose} autoFocus>
                                        Logout
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
