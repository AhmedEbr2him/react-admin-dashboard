import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listGridPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, ListItem, ListItemText, Typography, useTheme, TextField } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import { Modal } from '@mui/base/Modal';

const Calender = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [titleName, setTitmeName] = useState('Event');

  const handleDateClick = selected => {
    const title = prompt('Enter Your Event Title');
    const calenderAPI = selected.view.calendar;
    calenderAPI.unselect();

    if (title) {
      calenderAPI.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = selected => {
    if (window.confirm(`Are you sure to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
    }
  };

  return (
    <>
      <Box
        margin='20px'
        sx={{
          '& .MuiList-root': { padding: '10px' },
        }}
      >
        <Header title='CALENDER' subtitle='Full Calender Interactive Page' />

        <Box display='flex' justifyContent='space-between'>
          {/* CALENDER SIDE BAR */}
          <Box flex='1 1 20%' backgroundColor={colors.primary[400]} mt='20px' borderRadius='4px'>
            <Typography padding='10px'>Events</Typography>
            <List>
              {currentEvents.map(event => (
                <ListItem
                  ke={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: '10px 0',
                    borderRadius: '2px',
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* CALENDER */}
          <Box flex='1 1 100%' ml='15px'>
            <FullCalendar
              height={'75vh'}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listGridPlugin]}
              headerToolbar={{
                left: 'prev,next,today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
              }}
              initialView='dayGridMonth'
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={events => setCurrentEvents(events)}
              initialEvents={[
                {
                  id: '1234',
                  title: 'All-day event',
                  date: '2024-27-6',
                },
                {
                  id: '4321',
                  title: 'Timeed event',
                  date: '2024-30-6',
                },
              ]}
            />
          </Box>
        </Box>
      </Box>
      s{' '}
    </>
  );
};
export default Calender;
