import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'

import useStyle from './styles';

const Main = () => {

        const classes = useStyle();
        
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powerd By Speechly" >

        </CardHeader>
    </Card>
  )
}

export default Main