import React from 'react';
import './rules-page.css';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

import { Survey } from '../../components/Survey';
import { CardNews } from '../../components/CardNews/CardNews';
import { CardNewsText } from '../../components/CardNewsText';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Box } from '@mui/material';


export const RulesPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
  ];

  const currentPage = 'Правила добавления организаций или фирм в наш каталог';

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

          <Grid container spacing={4}>
            <Grid item xs={12} md={9}>

              <Typography mb={2} variant="h4" component="h">
                Правила добавления организаций или фирм в наш каталог
              </Typography>

              <Typography py={2} variant='body1' component='p'>
                Каталог организаций НКО - это место, где можно добавить свою
                некоммерческую организацию, а посетитель - просмотреть её.Для
                размещения свой организации нужно зарегистрироваться, указав
                раздел, название организации, описание, контактные данные, логин
                и пароль в системе. Если Вы вдруг забудете Имя или Пароль для входа
                в каталог, то система Вышлет Вам регистрационные данные на E-mail,
                указанный при регистрации.Все регистрации активируются администратором
                каталога.
              </Typography>

              <Typography mb={2} variant="h6" component="h">
                Выполняйте следующие условия:
              </Typography>

              <Box>
                <Typography py={2} className='link__more'>
                  В каталоге разрешается:
                </Typography>

                <Typography variant="body2" >
                  - регистрировать организации;
                </Typography>
                <Typography variant="body2" >
                  - загрузить логотип, схему проезда, указать контактные данные и филиалы;
                </Typography>
                <Typography variant="body2" >
                  - размещать прайс-листы на срок от 3 до 360 дней;
                </Typography>
                <Typography variant="body2" >
                  - размещать галлерею товаров и услуг;
                </Typography>
                <Typography variant="body2" >
                  - размещать excel прайсы;
                </Typography>
                <Typography variant="body2" >
                  - размещать публикации (новости, объявления, вакансии, пресс-релизы);
                </Typography>
                <Typography variant="body2" >
                  - проводить рекламные компании.
                </Typography>
              </Box>

              <Box>
                <Typography py={2} className='link__more'>
                  В каталоге запрещается:
                </Typography>

                <Typography variant="body2" >
                  - размещать организацию, содержание которой не соответствует теме выбранного раздела;
                </Typography>
                <Typography variant="body2" >
                  - вставлять в объявление мета-теги, всевозможный код, непонятные символы и рисунки;
                </Typography>
                <Typography variant="body2" >
                  - подача регистрации без указания данных для обратной связи (емайл, телефон или URL);
                </Typography>
                <Typography variant="body2" >
                  - подача регистрации, содержащих ненормативную лексику и нарушающие нормы морали;
                </Typography>
                <Typography variant="body2" >
                  - размещать организацию общего рекламного характера, сообщения не соответствующие тематике раздела
                </Typography>
              </Box>

              <Typography py={2} variant='body1' component='p'>
                В случае нарушения правил, Ваш аккаунт будет удален, а также Вам будет
                закрыт доступ для дальнейшей работы с каталогом.Администрация сайта никоим
                образом не несёт ответственность за услуги или товар, предложение которых
                находится на данном каталоге, а также оставляет за собой право удалять
                любые регистрации без объяснения причин.
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
