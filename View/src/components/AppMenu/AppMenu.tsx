import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import IconDashBoard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import IconChiropractor from '@material-ui/icons/VerifiedUser';
import HealingIcon from '@material-ui/icons/Healing';

import AppMenuItem from './AppMenuItem';

const appMenuItems = [
    {
        name: 'Dashboard',
        link: '/',
        Icon: IconDashBoard,
    },
    {
        name: 'Chiropractor List',
        link: '/chiropractors',
        Icon: IconChiropractor,
    },
    {
        name: 'Patient List',
        link: '/patients',
        Icon: IconPeople,
    },
    {
        name: 'Healing',
        link: '/healing',
        Icon: HealingIcon,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
    },
    {
        name: 'Appointments',
        Icon: IconLibraryBooks,
        items: [
            {
                name: 'Urgrent',
            },
            {
                name: 'All',
            },
        ],
    },
]

const AppMenu: React.FC = () => {
    const classes = useStyles()

    return (
        <List component="nav" className={classes.appMenu} disablePadding>
            {appMenuItems.map((item, index) => (
                <AppMenuItem {...item} key={index} />
            ))}
        </List>
    )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
    createStyles({
        appMenu: {
            width: '100',
        },
        navList: {
            width: drawerWidth,
        },
        menuItem: {
            width: drawerWidth,
        },
        menuItemIcon: {
            color: '#fff',
        },
    }),
);

export default AppMenu;