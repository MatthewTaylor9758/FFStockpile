import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getTeam } from '../store/teams';
import { getLeague } from '../store/leagues';
import { get_ffsplayer } from '../store/ffsplayers';
import { makeStyles, Container, TextField, Button, Typography, Grid } from '@material-ui/core';
import NavBar from '../components/NavBar';


function MyTeamPage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const team = useSelector(state => state.teams);
  // let team_ffsplayers = JSON.parse(localStorage.getItem('ffsplayers'));
  // const [teamFfsplayersObj, setTeamFfsplayersObj] = useState(team_ffsplayers ? team_ffsplayers : {})
  const ffsplayers = useSelector(state => state.ffsplayers)
  const [userTeam, setUserTeam] = useState('');
  const userId = user.id;
  const teamLeagueId = team.league_id;


  const handleGetPlayers = async (e) => {
    const res = await dispatch(get_ffsplayer(team.id, teamLeagueId))
    console.log(res);
  }

  const handleGetLeague = async (e) => {
    console.log(teamLeagueId);
    const res = await dispatch(getLeague(teamLeagueId));
    console.log(res);
  }

  const handleJoinLeague = (e) => {

  }

  const handleGetTeam = async (e) => {
    console.log(userId)
    const res = await dispatch(getTeam(userId))
    // console.log(res)
    // await setUserTeam(res['team'])
    // console.log(userTeam)
    // console.log(teamLeagueId);
    // const res2 = await dispatch(getLeague(teamLeagueId));
    // const res3 = await dispatch(get_ffsplayer(team.id, teamLeagueId))
    console.log(res)
    // console.log(res2)
    // console.log(res3)
    // debugger
  }
  let playerArr = [...Object.values(ffsplayers)]

  useEffect(() => {
    // console.log(team_ffsplayers)
    handleGetTeam();
  }, [])

  // const testing = () => {
  //   console.log(playerArr)
  //   console.log(Object.values(...Object.values(ffsplayers)))
  // }

  const logout = () => {
    localStorage.clear()
    window.location.href = '/login'
  }

  const useStyles = makeStyles((theme) => ({
    // columns: {
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   width: '100%'
    // },
    outsideLinks: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRight: '2px solid gray',
      height: '100%'
    },
    outsideContainer: {
      background: 'linear-gradient(-45deg, rgba(255, 255, 255, .2), rgba(25, 111, 12, .7))',
      height: '100vh'
    },
    infoContainer: {
      position: 'absolute',
      top: '100px',
      minWidth: 'fit-content',
    },
    playerInfo: {
      height: 'fit-content',
      minWidth: 'fit-content',
      marginLeft: '5em'
    },
    logoutDiv: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    logoutButton: {
      '&:hover': {
        backgroundColor: 'rgb(200, 0, 0)'
      }
    },
    gridTitle: {
      display: 'flex',
      minWidth: 'fit-content',
      fontWeight: '600'
    },
    playerInfoContainer: {
      paddingLeft: '0',
      width: '100%'
    },
    playerItem: {
      display: 'flex',
      justifyContent: 'center'
    },
    linksContainer: {
      height: '100%'
    },
    stuffContainer: {
      height: '100%'
    }
  }))

  const classes = useStyles()

  return (
    <>
      <NavBar />
      <div className={classes.outsideContainer}>
        <Container className={classes.infoContainer}>
          {/* <Button onClick={handleGetPlayers}>Show My Teams</Button>
          <Button onClick={handleGetLeague}>Get League</Button>
          <Button onClick={handleJoinLeague}>Join League</Button>
          <Button onClick={handleGetTeam}>Get Team</Button> */}
          {/* <Button onClick={testing}>Test</Button> */}
          <div className={classes.logoutDiv}>
            <Button onClick={logout} className={classes.logoutButton}>Log out</Button>
          </div>
          <Grid container xs={12} className={classes.stuffContainer}>
            <Grid item xs={2} className={classes.linksContainer}>
              <div className={classes.outsideLinks}>
                <NavLink to='#'>NFL Fantasy</NavLink>
                <NavLink to='#'>CBS Fantasy</NavLink>
                <NavLink to='#'>ESPN Fantasy</NavLink>
                <NavLink to='#'>Yahoo Fantasy</NavLink>
              </div>
            </Grid>
            <Grid container item xs={9} className={classes.playerInfo}>
              <Grid container item>
                <Grid item xs={2} className={classes.gridTitle}>
                  Name
                  </Grid>
                <Grid item xs={1} className={classes.gridTitle}>
                  Team
                  </Grid>
                <Grid item xs={1} className={classes.gridTitle}>
                  Position
                  </Grid>
                <Grid item xs={1} className={classes.gridTitle}>
                  Height
                  </Grid>
                <Grid item xs={1} className={classes.gridTitle}>
                  Weight
                  </Grid>
                <Grid item xs={2} className={classes.gridTitle}>
                  DOB
                  </Grid>
                <Grid item xs={2} className={classes.gridTitle}>
                  College
                  </Grid>
                <Grid item xs={2}>

                </Grid>
              </Grid>
              <Grid className={classes.playerInfoContainer}>
                {playerArr ? playerArr.map(player => {
                  return (
                    <Grid container item>
                      <Grid item xs={2}>
                        {player['full_name']}
                      </Grid>
                      <Grid item xs={1}>
                        {player['nfl_team']}
                      </Grid>
                      <Grid item xs={1}>
                        {player['position']}
                      </Grid>
                      <Grid item xs={1}>
                        {player['height']}
                      </Grid>
                      <Grid item xs={1}>
                        {player['weight']}
                      </Grid>
                      <Grid item xs={2}>
                        {player['dob']}
                      </Grid>
                      <Grid item xs={2}>
                        {player['college']}
                      </Grid>
                      <Grid item xs={2}>

                      </Grid>
                    </Grid>
                  )
                }) : null}
              </Grid>
            </Grid>

          </Grid>
        </Container>
      </div>
    </>
  )
}

export default MyTeamPage;
