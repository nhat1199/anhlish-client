import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { AccountCircle } from '@material-ui/icons';
import { Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import headerStyles from './header.styles';
import MenuDialog from './MenuDialog';
import { learningLink } from 'helper/RouterLink.data';
export default function Header() {
	const classes = headerStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className={classes.root}>
			<AppBar>
				<Toolbar>
					<Typography className={classes.title} variant="h6">
						LOGO
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<div className={classes.itemFixed}>
						<Link to={learningLink.readingLink} className="text-white p-3">
							<b>Reading</b>
						</Link>
						<Link to={learningLink.vocabularyLink} className="text-white p-3">
							<b>Vocabulary</b>
						</Link>
						<Link to="/learning/learn-by-heart" className="text-white p-3">
							<b>DUMMY</b>
						</Link>
						<Link to="/home" className="text-white p-3">
							<b>Home</b>
						</Link>
					</div>
					<div className={classes.itemFixed + ' ml-auto'}>
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={open}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>My account</MenuItem>
						</Menu>
					</div>
					<div className={classes.moreIcon}>
						<IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="open drawer">
							<MenuDialog />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
}
