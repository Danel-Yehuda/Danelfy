import React from 'react'
import {AppBar, Button,Toolbar, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Header = () => {

    const classes = useStyles()

    const displayHeader = () => {
        return (
            <Toolbar className={classes.toolbar}>
                {danelfyLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const danelfyLogo = (
        <Typography variant="h6" component="h1" className={classes.logo}>
            Danelfy
        </Typography>
    );

    const headersData = [
        {
            label: "My Account",
            href: "/account",
        },
        {
            label: "Log Out",
            href: "/logout",
        }
    ];
    const getMenuButtons = () => {
        return headersData.map(({ label,href }) => {
            return(
                <Button className={classes.menuButton} key= {label} color= "inherit" component= {Link} to= {href}>
                    {label}
                </Button>
            )
        })
    }

    return(
        <AppBar className={classes.appbar}>
            {displayHeader()}
        </AppBar>
    )
}

export default Header