import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import './news-page.css';

import { Survey } from '../../components/Survey';
import { CardNewsText } from '../../components/CardNewsText';
import { CardNews } from '../../components/CardNews/CardNews';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';

import News1 from '../../assets/images/news1.png';
import SocialImg1 from '../../assets/images/social-img1.jpg'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export const NewsPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
  ];

  const currentPage = 'Новости';

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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

          <Typography py={2} variant="h4" component="h1">
            Новости
          </Typography>



          <Grid container spacing={4}>
            <Grid item xs={12} md={9}>

              <Grid py={2} container spacing={2}>

                <Grid item xs={12} sm={9}>
                  <TextField size='small' fullWidth label='Поиск по новостям:' />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button fullWidth sx={{ height: '100%' }} variant='contained' color='primary'> ПОИСК </Button>
                </Grid>
              </Grid>

              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Новые" {...a11yProps(0)} />
                    <Tab label="Популярные" {...a11yProps(1)} />
                    <Tab label="Случайные" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0} >
                  <Grid pb={2} container spacing={4}>

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
                  <Button color='rose' variant='contained'>ПОКАЗАТЬ ЕЩЕ</Button>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid pb={2} container spacing={4}>
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
                  <Button color='rose' variant='contained'>ПОКАЗАТЬ ЕЩЕ</Button>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Grid pb={2} container spacing={4}>
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
                  <Button color='rose' variant='contained'>ПОКАЗАТЬ ЕЩЕ</Button>
                </TabPanel>
              </Box>

            </Grid>

            <Grid item xs={12} md={3}>
              <Survey />
            </Grid>
          </Grid>

        </Paper>
      </Container>
    </main >
  );
};

