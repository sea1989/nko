import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

import './Footer.css';

export const Footer = () => {

  return (

    <Paper square
      sx={{
        position: 'relative',
        backgroundColor: '#4478FF',
        color: '#fff',
        pt: '80px',
        pb: '30px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >

      <Container>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>

            <Typography variant="h6" gutterBottom>
              Клиентам
            </Typography>
            <Divider sx={{
              background: 'white',
              mb: 2,
            }} />

            <Link className='link__footer'>
              Бесплатная регистрация
            </Link>
            <Link className='link__footer'>
              Вход в личный кабинет
            </Link>
            <Link className='link__footer'>
              Правила размещения
            </Link>

          </Grid>

          <Grid item xs={12} md={4}>

            <Typography variant="h6" gutterBottom>
              Посетителю
            </Typography>
            <Divider sx={{
              background: 'white',
              mb: 2,
            }} />

            <Link to='/rules' className='link__footer'>
              Правила
            </Link>
            <Link className='link__footer'>
              Расширенный поиск
            </Link>

          </Grid>

          <Grid item xs={12} md={4}>

            <Typography variant="h6" gutterBottom>
              Наши контакты
            </Typography>
            <Divider sx={{
              background: 'white',
              mb: 2,
            }} />

            <Link className='link__footer'>
              Обратная связь
            </Link>

          </Grid>

        </Grid>

      </Container>
    </Paper>
  );
};

