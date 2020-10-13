import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, CardActions, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
})

const Dashboard = () => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root }>
                <CardContent>
                    <Grid
                        container
                        justify="space-between"
                        spacing={3}
                    >
                        hel
                    </Grid>
                    <CardActions>
                        60
                    </CardActions>
                </CardContent>
            </Card>
        </>
    )

}

export default Dashboard;