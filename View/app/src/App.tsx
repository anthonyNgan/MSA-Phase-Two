import React from "react";
import clsx from 'clsx';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import AppMenu from '../src/components/AppMenu/AppMenu';

import Dashboard from '../src/components/Dashboard/Dashboard';
import Chiropractors from '../src/components/Chiropractors/Chiropractors';
import Patients from '../src/components/Patients/Patients';

const PageDashboard = () => <Dashboard />
const PageChiropractors = () => <Chiropractors />
const PageOrders = () => <Typography variant="h3" component="h1">Orders Page</Typography>
const PagePatients = () => <Patients />


const App:  React.FC = () => {
    const classes = useStyles()
    //clsx allows us to compose string class names
    return (
        <BrowserRouter>
        <div className={clsx('App', classes.root)}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <AppMenu />
            </Drawer>
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <Switch>
                            <Route path="/" exact component={PageDashboard} />
                            <Route path="/chiropractors" exact component={PageChiropractors} />
                            <Route path="/orders" component={PageOrders} />
                            <Route path="/patients" component={PagePatients} />
                    </Switch>
                </Container>
            </main>
        </div> 
        </BrowserRouter>
    );
}
    const drawerWidth = 240

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            background: '#0253B3',
            color: '#fff',
        },
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
    }));


export default App;
