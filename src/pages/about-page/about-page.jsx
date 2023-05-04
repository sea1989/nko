import React from 'react';
import './about-page.css';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

import { Survey } from '../../components/Survey';
import { CardNews } from '../../components/CardNews/CardNews';
import { CardNewsText } from '../../components/CardNewsText';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';


export const AboutPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
    { id: 1, link: '/', title: 'Собрание депутатов' },
  ];

  const currentPage = 'Нормативные правовые акты';

  return (
    <main>
      <Container>

        <Breadcrumb list={projectsList} currentPage={currentPage} />

        {/* <Breadcrumbs sx={{ pt: '60px' }} separator="-" aria-label="breadcrumb">
          <Link className='link__more' underline="hover" color="inherit" to={'/'}>
            О портале
          </Link>
          <Typography color="primary.rose">Breadcrumbs</Typography>
        </Breadcrumbs> */}

        <Paper square elevation={0}
          sx={{
            position: 'relative',
            backgroundColor: '#fff',
            color: '#000',
            pt: '20px',
            pb: '80px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >

          <Typography mb={2} variant="h4" component="h2">
            О портале
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={9}>
              <Typography variant='body1' component='p'>
                Портал очень прост в обращении, доступна возможность размещения
                информации о некоммерческой организации, ее деятельность, новости,
                вакансии, направления деятельности.
              </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
              <Survey />
            </Grid>
          </Grid>

        </Paper>

      </Container>

      <Paper square elevation={0}
        sx={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#000',
          pt: '0px',
          pb: '80px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >

        <Container>

          <Grid container display={'flex'} justifyContent={'space-between'}>
            <Typography mb={2} variant="h4" component="h2">
              Новости
            </Typography>

            <Link className='link__all'>Все новости →</Link>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <CardNews />
            </Grid>
            <Grid item xs={12} md={3}>
              <CardNewsText />
            </Grid>
            <Grid item xs={12} md={3}>
              <CardNews />
            </Grid>
            <Grid item xs={12} md={3}>
              <CardNewsText />
            </Grid>
          </Grid>

        </Container>
      </Paper>

    </main>
  );
};
