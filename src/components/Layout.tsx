import React, { useState } from 'react';

import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
      width: drawerWidth,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  root: {
    display: 'flex',
  },
}));

const LoginLink = (props: any) => <RouterLink to="/login" {...props} />;
const MainPageLink = (props: any) => <RouterLink to="/" {...props} />;

const Layout: React.FC = props => {
  const classes = useStyles();
  const theme = useTheme<Theme>();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerItems = [
    {
      text: 'Login',
      link: LoginLink,
      icon: <MailIcon />,
    },
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {/* might wanna add logo here */}
      <Divider />
      <List>
        {drawerItems.map((item, i) => (
          <ListItem component={item.link} button key={i}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      {/* 
        <Divider />
        // Other items, that way its ez to create sections
        */}
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            <Link color="inherit" component={MainPageLink}>
              Stories Site
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* Paper component? Optimal width is between 50 and 75 chars per line (use em units?) */}
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
