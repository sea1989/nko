import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

import './social-item-page.css';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

import { Survey } from '../../components/Survey';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { CardNews } from '../../components/CardNews/CardNews';
import { CardSocial } from '../../components/CardSocial/CardSocial';

import Social1 from '../../assets/images/social1.jpg';
import Social2 from '../../assets/images/social2.jpg';
import SocialImg1 from '../../assets/images/social-img1.jpg'


export const SocialItemPage = () => {

  const project = useSelector(state => state.project.currentProject);

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

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
    { id: 2, link: '/social', title: 'Общественные проекты' },
  ];

  return (
    <main>
      <Container>

        <Breadcrumb list={projectsList} currentPage={project?.title} />

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

          <Grid container spacing={4}>
            <Grid item xs={12} md={9}>

              <Typography mb={2} variant="h4" component="h">
                {project?.title}
              </Typography>

              <Typography variant="subtitle1" color="#686868">
                {project?.date}
              </Typography>

              <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation]} className="swiper__social">
                {project?.gallery.map((item) =>
                  <SwiperSlide>
                    <img src={item} alt='img' />
                  </SwiperSlide>
                )}
              </Swiper>

              <Typography py={2} variant='body1' component='p'>
                {project?.text}
              </Typography>


            </Grid>

            <Grid item xs={12} md={3}>
              <Survey />
            </Grid>
          </Grid>



        </Paper>

        <Paper square elevation={0}
          sx={{
            position: 'relative',
            backgroundColor: '#fff',
            color: '#000',

            pb: '80px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >

          <Typography mb={2} variant="h4" component="h2">
            Другие проекты
          </Typography>

          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            slidesPerGroup={1}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },

              1024: {
                slidesPerView: 2,
              },

            }}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={false}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >

            <Grid container >
              {projects.map((item) => (
                <Grid item xs={12} md={6}>
                  <SwiperSlide>
                    <CardSocial project={item} />
                  </SwiperSlide>
                </Grid>

              ))}

            </Grid>
          </Swiper>
        </Paper>
      </Container>

    </main>
  );
};
