
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';


import './NewsMain.css';
import { CardNews } from '../CardNews/CardNews';
import { CardNewsText } from '../CardNewsText';
import { Survey } from '../Survey';

export const NewsMain = () => {

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
        <Grid md={9} container display={'flex'} justifyContent={'space-between'}>
          <Typography mb={2} variant="h4" component="h2">
            Новости
          </Typography>

          <Link className='link__all'>Все новости →</Link>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>

            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <CardNews />
              </Grid>
              <Grid item xs={12} md={4}>
                <CardNewsText />
              </Grid>
              <Grid item xs={12} md={4}>
                <CardNews />
              </Grid>
              <Grid item xs={12} md={4}>
                <CardNewsText />
              </Grid>
              <Grid item xs={12} md={4}>
                <CardNews />
              </Grid>
              <Grid item xs={12} md={4}>
                <CardNewsText />
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={12} md={3}>
            <Survey />
          </Grid>
        </Grid>


      </Container>
    </Paper>
  );
};

