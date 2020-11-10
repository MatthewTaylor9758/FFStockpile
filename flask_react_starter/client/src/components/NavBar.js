import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles, Container, TextField, Button, Typography, AppBar, Toolbar, Grid, Modal } from '@material-ui/core';
import '../styles/navBar.css';

function NavBar() {
  const user = useSelector(state => state.auth);
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear()
    window.location.href = '/login'
  }

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles({
    navBar: {
      backgroundImage: 'radial-gradient(rgba(110, 12, 25, .9), rgb(110, 12, 25, .9), rgba(0, 0, 0, .7))',
      width: '100%',
      padding: '0',
      maxHeight: '64px'
    },
    leftSide: {
      display: 'flex',
      // padding: '0 2em',
      justifyContent: 'flex-start',
    },
    middle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    rightSide: {
      display: 'flex',
      padding: '0 2em',
      justifyContent: 'flex-end',
    },
    sideLinks: {
      padding: '0 .5em'
    },
    logo: {
      fontFamily: 'Roboto',

    },
    logoutButton: {
      padding: '0 .5em',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    myInfoModal: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      height: '50%',
      transform: 'translate(50%, 50%)',
      backgroundColor: 'rgba(255, 255, 255, .9)',
      color: 'black',
      margin: '0'
    },
    loggedInLinks: {
      display: 'flex',
    },
    linkDiv: {
      display: 'flex',
      alignItems: 'center'
    },
    contactButton: {
      color: 'white'
    }
  })

  const classes = useStyles();

  return (
    <>
      <AppBar position='sticky' className={classes.navBar}>
        <Toolbar>
          <Grid container xs={12}>
            <Grid item xs={4} className={classes.leftSide}>
              <Button className={classes.contactButton} onClick={handleOpen}>Contact Info</Button>
              {localStorage.getItem('user') ?
                <div className={classes.loggedInLinks}>
                  <div className={classes.linkDiv}>
                    <NavLink to={`/myTeam/${user.id}`} id='links' className={classes.sideLinks}>My team</NavLink>
                  </div>
                  <div className={classes.linkDiv}>
                    <NavLink to='/players' id='links' className={classes.sideLinks}>Available Players</NavLink>
                  </div>
                </div>
                : null}
            </Grid>
            <Grid item xs={4} className={classes.middle}>
              <NavLink to="/" activeclass="active" id='links' className={classes.logo}>FFStockpile</NavLink>
            </Grid>
            <Grid item xs={4} className={classes.rightSide}>
              {!localStorage.getItem('user') ?
                <div className={classes.linkDiv}>
                  <NavLink to='/login' id='links' className={classes.sideLinks}>Login</NavLink>
                  <NavLink to='/signup' id='links' className={classes.sideLinks}>Sign up</NavLink>
                </div>
                :
                <div className={classes.linkDiv}>
                  <a onClick={logout} className={classes.logoutButton}>Log out</a>
                </div>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.myInfoModal}>
            This is just a test for the modal.
        </div>
      </Modal>
    </>
  )
}

// rgb(110, 12, 25)
export default NavBar;
