import React, { useState } from 'react';

import './register-page.css';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { Survey } from '../../components/Survey';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';

export const RegisterPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
  ];

  const currentPage = 'Регистрация';

  const [services, setServices] = useState([]);

  const handleChange = (event) => {
    setServices(event.target.value);
  };

  const [agreement, setAgreement] = useState(false);

  const handleCheckbox = (event) => {
    setAgreement(event.target.checked);
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

          <Grid container spacing={4}>
            <Grid item xs={12} md={9}>

              <Typography py={2} variant="h4" component='h1'>
                Регистрация в каталоге
              </Typography>

              <Box
                component="form"
                sx={{
                  maxWidth: '660px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}

              >

                <FormControl size='small' fullWidth>
                  <InputLabel id="demo-simple-select-label">Службы</InputLabel>
                  <Select

                    multiple
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={services}
                    label="Службы"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Администратор</MenuItem>
                    <MenuItem value={20}>Модератор</MenuItem>
                    <MenuItem value={30}>Заказчик</MenuItem>
                  </Select>
                </FormControl>

                <Typography mt={-1} variant="caption" display="block" color='gray'>
                  * Вы можете выбрать несколько категорий

                </Typography>

                <TextField size='small' fullWidth id="company" label="Название компании" variant="outlined" />
                <TextField multiline minRows='3' rows='3' label='Описание' />
                <TextField size='small' label='Ключевые слова деятельности (через запятую)' />

                <TextField size='small' label='Страна' />
                <TextField size='small' label='Область' />
                <TextField size='small' label='Город' />
                <TextField size='small' label='Адрес' />
                <TextField size='small' type='number' label='Почтовый индекс' />
                <TextField size='small' type='number' label='Телефон' />
                <TextField size='small' type='number' label='Номер контактного телефона' />
                <TextField size='small' label='Контактное лицо' />
                <TextField size='small' type='number' label='ICQ №' />
                <TextField size='small' label='URL / Адрес сайта' />
                <TextField size='small' label='Страничка в vk.com/' />
                <TextField size='small' label='Страничка в odnoklassniki.ru/' />
                <TextField size='small' label='Страничка в vk.com/' />
                <TextField size='small' type='number' label='ICQ №' />
                <TextField size='small' type='mail' label='E-Mail' />
                <TextField size='small' type='number' label='Код безопасности' />

                <Grid container spacing={2}>
                  <Grid mb={-1} item xs={12}>
                    <Typography variant="body1" >
                      Адрес Вашей странички http://xn----jtbnlgnbhbs.xn--p1ai
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField size='small' fullWidth label='имя фирмы в латинице' />
                  </Grid>
                  <Grid  item xs={6} sm={3}>
                    <Button fullWidth sx={{ height: '100%' }} variant='contained' color='primary'> ПРОВЕРИТЬ </Button>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid mb={-1} item xs={12}>
                    <Typography variant="body1" >
                      Ваше имя пользователя
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField size='small' fullWidth label='Логин' />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Button fullWidth sx={{ height: '100%' }} variant='contained' color='primary'> ПРОВЕРИТЬ </Button>
                  </Grid>
                </Grid>

                <TextField type='password' size='small' label='Пароль' />
                <TextField type='password' size='small' label='Пароль (еще раз)' />

                <FormControlLabel
                  control={<Checkbox checked={agreement} onChange={handleCheckbox} />}
                  label={
                    <Typography variant="body2">
                      Я приниаю <a href="#">правила каталога</a>.
                    </Typography>
                  }
                />

                <Button type='submit' color='rose' variant="contained" endIcon={<SendOutlinedIcon />}>
                  РЕГИСТРАЦИЯ
                </Button>

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
