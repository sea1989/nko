import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Sakhalin from '../../assets/images/sakhalin.png'

import './Welcome.css';

export const Welcome = () => {

  return (

    <Paper square
      sx={{
        position: 'relative',
        backgroundColor: '#F7F7F7',
        color: '#000',
        pt: '80px',
        pb: '80px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >

      <Container>

        <Typography mb={2} variant="h6" component="h2">
          Добро пожаловать!
        </Typography>

        <Grid container spacing={4}>

        <Grid  item xs={12} md={1}>
        <img className='welcome__img' src={Sakhalin} alt='gerb' />
        </Grid>

          <Grid  item xs={12} md={5}>
           
            <Typography variant="body1" gutterBottom>
              Приветствуем вас на портале, созданном, при поддержке
              Правительства Сахалинской области, для каждого, кто реализует
              социальные проекты, для тех, кто ищет партнёров в сфере некоммерческого
              сектора, для всех, кто готов принять участие в мероприятиях и
              гражданских инициативах некоммерческих организаций.
            </Typography>

          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Вместе мы вносим вклад в устойчивое развитие общества, создаём благоприятную среду для гармонизации общественных отношений, содействуем росту доверия между организациями и людьми.
              Активность каждого из вас сделает портал лучше и интереснее!
              Вместе мы сможем больше!
            </Typography>
          </Grid>


        </Grid>


      </Container>
    </Paper>
  );
};

