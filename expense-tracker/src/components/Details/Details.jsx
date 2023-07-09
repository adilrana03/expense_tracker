import React from 'react';
import 'chart.js/auto';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';
import useStyles from './styles';



const Details = ({ title }) => {
        const classes = useStyles();
        const { total, chartData } = useTransactions(title);
        return (
                <Card className={title === 'Income' ? classes.income : classes.expense} style={{ boxShadow: "0 30px 30px red" }} >
                        <CardHeader title={title} />
                        <CardContent style={{ margin: "auto", width: "auto" }} >
                                <Typography variant="h5">₹ {total}</Typography>
                                <Doughnut data={chartData} />
                        </CardContent>
                </Card>
        );
};


export default Details