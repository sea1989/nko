import React, { useState } from 'react';

import './contacts-page.css';

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

export const ContactsPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
  ];

  const currentPage = 'Наши контакты';

  const [services, setServices] = useState('');

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
                Написать нам
              </Typography>


              <Typography py={2} variant="h6" component='h2'>
                Вопросы по технической части каталога.<br />
                Вопросы по размещению рекламы в каталоге.
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

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Службы</InputLabel>
                  <Select
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
                <TextField fullWidth id="fio" label="Фамилия Имя Отчество" variant="outlined" />

                <TextField type='number' label='Номер контактного телефона' />

                <TextField type='mail' label='Email' />

                <TextField multiline minRows='3' rows='3' label='Сообщение' />

                <TextField type='number' label='Код безопасности' />

                <FormControlLabel
                  control={<Checkbox checked={agreement} onChange={handleCheckbox} />}
                  label={
                    <Typography variant="body2">
                      Согласие <a href="#">на обработку персональных данных</a>.
                    </Typography>
                  }
                />

                <Button color='rose' variant="contained" endIcon={<SendOutlinedIcon /> }>
                  Отправить
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
