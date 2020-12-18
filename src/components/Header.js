import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'spaceBetween',
  },

  title: {
    fontSize: '3rem',
    flexGrow: 1,
  },

  menu: {
    padding: '8px',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Typography className={classes.title} variant='h6' color='inherit'>
            Lambda Eats
          </Typography>
          <Typography className={classes.menu} variant='h6' color='inherit'>
            Home
          </Typography>
          <Typography className={classes.menu} variant='h6' color='inherit'>
            Help
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
