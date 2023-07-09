import React from 'react';
import Details from './components/Details/Details';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import Main from './components/Main/Main';
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

function App() {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.grid} container spacing={3} alignItems="center" justify="center" style={{ height: '90vh' }} >
                <Grid item xs={12} sm={6} md={3} className={classes.mobile} >
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.desktop}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.last}>
                    <Details title="Expense" />
                </Grid>
                <PushToTalkButtonContainer >
                    <PushToTalkButton />
                </PushToTalkButtonContainer>
            </Grid>
        </div>
    );
}

export default App;







