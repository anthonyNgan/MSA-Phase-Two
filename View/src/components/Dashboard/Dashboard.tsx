import React  from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Card, CardContent, CardActions, Grid } from '@material-ui/core';
import FullCalendar, {EventClickArg, DateSelectArg, EventApi} from '@fullcalendar/react';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
})

const Dashboard = () => {
    
    const classes = useStyles();
    const {user} = useAuth0();
   
    const handleEventClick = (clickInfo: EventClickArg) => {
          console.log("hello world")
          clickInfo.event.remove();
      }

    const handleDateSelect = (selectInfo: DateSelectArg) => {
        let title = prompt('Please enter your new booking');
        let calendarAPI = selectInfo.view.calendar

        calendarAPI.unselect()

        if (title) {
            calendarAPI.addEvent({
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }


    return (
        <>
            <Card className={classes.root }>
                <CardContent>
                    <Grid>
                        Hello {user.nickname}!
                    </Grid>
                    <CardActions>
                        What do you have on today? 
                        <br></br>
                        Click on calendar to create schedule events.
                    </CardActions>
                </CardContent>
            </Card>
            <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            />
        </>
    )

}

export default Dashboard;