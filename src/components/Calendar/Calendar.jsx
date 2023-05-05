
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import './Calendar.css';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { CardCalendar } from '../CardCalendar/CardCalendar';

export const Calendar = () => {

  return (

    <Paper square elevation={0}
      sx={{
        position: 'relative',
        backgroundColor: '#fff',
        color: '#000',
        pt: '80px',
        pb: '80px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >

      <Container>
        <Grid container display={'flex'} justifyContent={'space-between'}>
          <Typography mb={2} variant="h4" component="h2">
            Календарь
          </Typography>

          <Link className='link__all'>Все события→</Link>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <CardCalendar />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardCalendar />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardCalendar />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardCalendar />
              </Grid>

            </Grid>

          </Grid>

          <Grid item xs={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Grid>

        </Grid>

      </Container>
    </Paper>
  );
};

