
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';


import './NewNKO.css';
import { CardNewNKO } from '../CardNewNKO/CardNewNKO';

export const NewNKO = () => {

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
            Новые НКО
          </Typography>

          <Link className='link__all'>Полный список→</Link>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <CardNewNKO />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardNewNKO />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardNewNKO />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardNewNKO />
          </Grid>

        </Grid>


      </Container>
    </Paper>
  );
};

