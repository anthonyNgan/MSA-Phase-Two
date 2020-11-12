import React , {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Card, CardContent, CardActions, Grid } from '@material-ui/core';
import FullCalendar, {EventClickArg, DateSelectArg} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import {calendarEvents} from '../../api/api';

import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
})

const Dashboard = () => {
    const classes = useStyles();
    const {user} = useAuth0();
    const [data, setData] = useState<any[]>([

    ]);
    const Calendar = {
        calendarEvents: [
            {title: "Today Event", start: new Date() }
        ]
    }

   /* useEffect(() => {
        const getCalendarRequest = async () => {
            setData(calendarEvents());
        }
        getCalendarRequest();
    }, []);*/

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
                    <Grid
                       
                    
                    >
                        Hello {user.nickname}!
                    </Grid>
                    <CardActions>
                        What do you have on today? 
                        <br></br>
                        Click on Calendar Schedule to add in events. And Delete me.
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
            events={Calendar.calendarEvents}
            />
        </>
    )

}

export default Dashboard;