import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const Form = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    .....

                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value='Income'>Income</MenuItem>
                        <MenuItem value='Expense'>Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value='business'>Business</MenuItem>
                        <MenuItem value='salary'>Salary</MenuItem>
                    </Select>
                </FormControl>

            </Grid>

        </Grid>
    )
}

export default Form