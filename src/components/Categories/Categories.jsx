import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';

import './Categories.css';
import { CardNewsText } from '../CardNewsText';
import { CardCategories } from '../CardCategories/CardCategories';


export const Categories = () => {

  return (

    <Paper square
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
        <Typography mb={2} variant="h4" component="h2">
          Категории
        </Typography>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          slidesPerGroup={1}
          breakpoints={{
            // when window width is >= 640px
            768: {
              slidesPerView: 4,
            },

            1024: {
              slidesPerView: 5,
            },

          }}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={false}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CardCategories />
          </SwiperSlide>

          <SwiperSlide>
            <CardCategories />
          </SwiperSlide>

          <SwiperSlide>
            <CardCategories />
          </SwiperSlide>

          <SwiperSlide>
            <CardCategories />
          </SwiperSlide>

          <SwiperSlide>
            <CardCategories />
          </SwiperSlide>

          <SwiperSlide>
            <CardCategories />
          </SwiperSlide>

          <SwiperSlide>
            <CardCategories />
          </SwiperSlide>

          <SwiperSlide>
            <CardCategories />
          </SwiperSlide>

          <SwiperSlide>
            <CardCategories />
          </SwiperSlide>

        </Swiper>


      </Container>
    </Paper>
  );
};

