import React, { useState } from 'react';
import './social-page.css';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

import { CardNews } from '../../components/CardNews/CardNews';
import { CardNewsText } from '../../components/CardNewsText';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Box, Button } from '@mui/material';
import { CardSocial } from '../../components/CardSocial/CardSocial';

import Social1 from '../../assets/images/social1.jpg';
import Social2 from '../../assets/images/social2.jpg';
import SocialImg1 from '../../assets/images/social-img1.jpg'
import News1 from '../../assets/images/news1.png';

export const SocialPage = () => {
  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
  ];
  const currentPage = 'Общественные проекты';

  const [projects, setProjects] = useState([
    {
      id: 1,
      img: Social1,
      gallery: [SocialImg1, SocialImg1, SocialImg1],
      alt: 'test',
      title: 'Проект «Эстафета сахалинские аллеи»',
      date: '02 марта 2023',
      text: 'С мая по июль 2021 года в каждом из 18 муниципалитетов региона прошли конкурсы на определение сахалинцев и курильчан, вносивших вклад в развитие области с ее основания.Голосование в поддержку кандидатов на увековечивание памяти осуществлялос ...',
    },
    {
      id: 2,
      img: Social2,
      gallery: [SocialImg1, SocialImg1, SocialImg1],
      alt: 'test',
      title: 'Ежегодная премия губернатора «Сахалинский маяк»',
      date: '03 марта 2023',
      text: 'С мая по июль 2021 года в каждом из 18 муниципалитетов региона прошли конкурсы на определение сахалинцев и курильчан, вносивших вклад в развитие области с ее основания.Голосование в поддержку кандидатов на увековечивание памяти осуществлялос ...',
    },
    {
      id: 3,
      img: Social1,
      gallery: [SocialImg1, SocialImg1, SocialImg1],
      alt: 'test',
      title: 'Проект «Эстафета сахалинские аллеи»',
      date: '12 марта 2023',
      text: 'С мая по июль 2021 года в каждом из 18 муниципалитетов региона прошли конкурсы на определение сахалинцев и курильчан, вносивших вклад в развитие области с ее основания.Голосование в поддержку кандидатов на увековечивание памяти осуществлялос ...',
    },
    {
      id: 4,
      img: Social2,
      gallery: [SocialImg1, SocialImg1, SocialImg1],
      alt: 'test',
      title: 'Ежегодная премия губернатора «Сахалинский маяк»',
      date: '22 марта 2023',
      text: 'С мая по июль 2021 года в каждом из 18 муниципалитетов региона прошли конкурсы на определение сахалинцев и курильчан, вносивших вклад в развитие области с ее основания.Голосование в поддержку кандидатов на увековечивание памяти осуществлялос ...',
    }
  ]);

  const [news, setNews] = useState([
    {
      id: 1,
      img: News1,
      gallery: [SocialImg1, SocialImg1, SocialImg1],
      alt: 'test',
      title: 'Опрос',
      date: '02 МАРТА 2023',
      text: 'Торжественное мероприятие, посвященное Всемирному Дню НКО, прошло в г.Южно - Сахалинске.27 февраля 2023 года в ДК Родина г.Южно - Сахалинска состоялось торжественное мероприятие,???? посвященное Всемирному Дню НКО.На праздник съехались представители...',
    },
    {
      id: 2,
      img: News1,
      gallery: [SocialImg1, SocialImg1, SocialImg1],
      alt: 'test',
      title: 'Опрос',
      date: '02 МАРТА 2023',
      text: 'Торжественное мероприятие, посвященное Всемирному Дню НКО, прошло в г.Южно - Сахалинске.27 февраля 2023 года в ДК Родина г.Южно - Сахалинска состоялось торжественное мероприятие,???? посвященное Всемирному Дню НКО.На праздник съехались представители...',
    },
    {
      id: 3,
      img: News1,
      gallery: [SocialImg1, SocialImg1, SocialImg1],
      alt: 'test',
      title: 'Опрос',
      date: '02 МАРТА 2023',
      text: 'Торжественное мероприятие, посвященное Всемирному Дню НКО, прошло в г.Южно - Сахалинске.27 февраля 2023 года в ДК Родина г.Южно - Сахалинска состоялось торжественное мероприятие,???? посвященное Всемирному Дню НКО.На праздник съехались представители...',
    },
    {
      id: 4,
      img: News1,
      gallery: [SocialImg1, SocialImg1, SocialImg1],
      alt: 'test',
      title: 'Опрос',
      date: '02 МАРТА 2023',
      text: 'Торжественное мероприятие, посвященное Всемирному Дню НКО, прошло в г.Южно - Сахалинске.27 февраля 2023 года в ДК Родина г.Южно - Сахалинска состоялось торжественное мероприятие,???? посвященное Всемирному Дню НКО.На праздник съехались представители...',
    }
  ]);

  return (
    <main>
      <Container>

        <Breadcrumb list={projectsList} currentPage={currentPage} />

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

          <Box
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            gap={2}
            display={'flex'} justifyContent={'space-between'} spacing={4}>

            <Typography variant="h4" component="h">
              Общественные проекты
            </Typography>

            <Button variant='contained' color='rose'>голосовать за проект</Button>

          </Box>

          <Grid mt={2} container spacing={4}>

            {projects.map((item) => (
              <Grid key={item.id} item xs={12} lg={6}>
                <CardSocial project={item} />
              </Grid>
            ))}

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
            {news.map((item, i) => {
              if (i % 2 === 0) {
                return <Grid key={item.id} item xs={12} md={3}>
                  <CardNews props={item} />
                </Grid>
              } else {
                return <Grid key={item.id} item xs={12} md={3}>
                  <CardNewsText props={item} />
                </Grid>
              }
            }
            )}
          </Grid>

        </Container>
      </Paper>

    </main>
  );
};
