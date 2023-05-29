import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

import './NewsMain.css';
import { CardNews } from '../CardNews/CardNews';
import { CardNewsText } from '../CardNewsText';
import { Survey } from '../Survey';
import News1 from '../../assets/images/news1.png';
import SocialImg1 from '../../assets/images/social-img1.jpg'


export const NewsMain = () => {

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

          <Link to='/news' className='link__all'>Все новости →</Link>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>

            <Grid container spacing={4}>

              {news.map((item, i) => {
                if (i % 2 === 0) {
                  return <Grid key={item.id} item xs={12} md={4}>
                    <CardNews props={item} />
                  </Grid>
                } else {
                  return <Grid key={item.id} item xs={12} md={4}>
                    <CardNewsText props={item} />
                  </Grid>
                }
              }
              )}

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

