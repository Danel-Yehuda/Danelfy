import React from 'react';
import { Container, BottomNavigation, AppBar } from '@material-ui/core'
import useStyles from './styles'

const OGMP = () => {

    const classes = useStyles()

    return(
        <Container>
            <AppBar>
                <BottomNavigation className={classes.stickToBottom}>

                </BottomNavigation>
            </AppBar>
        </Container>
    )
}

export default OGMP