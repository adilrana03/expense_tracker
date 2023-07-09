import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import List from './List/List';
import useStyle from './styles';
import Form from './Form/Form';
import { ExpenseTrackerContext } from '../../context/context';
import { useSpeechContext } from '@speechly/react-client';
import InfoCard from '../Info/Info';


const Main = () => {
    const classes = useStyle();

    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root} style={{ marginBottom: "20px", boxShadow: "0 5px 30px blue" }}>
            <CardHeader title="Expense Tracker" subheader="Powerd By Speechly" style={{ textAlign: "center", marginBottom: "-15px" }} />
            <CardContent>
                <Typography align='center' variant='h5' color='secondary'  >Total Balance = ₹ {balance} </Typography>
                <Typography variant='subtitle1' style={{ lineHeight: "1.2em", marginTop: "10px" }}>
                    <InfoCard />
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main