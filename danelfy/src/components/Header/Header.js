import React, {useState, useEffect} from 'react'
import {AppBar, Button, Toolbar, Typography, Avatar} from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import mort from '../../images/mort.png'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
        setUser(null)
    }


    useEffect(()=>{
        const token = user?.token
        //jwt (json web token)
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    return(
        <AppBar position="static" className={classes.appBar} color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.logo} variant="h5" align="center">Danelfy</Typography>
                <img className={classes.image} src={mort} alt="icon" height="60"/>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h5">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ):(
                    <Button className={classes.signin} component={Link} to="/auth" variant="contained">Sign IN</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Header