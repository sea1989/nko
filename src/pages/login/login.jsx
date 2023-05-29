import React from 'react';

import './login.css';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import { Survey } from '../../components/Survey';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const LoginPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
  ];

  const currentPage = 'Панель управления';

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
                Вход в личный кабинет клиента
              </Typography>

              <Box
                pb={2}
                component="form"
                sx={{
                  maxWidth: '660px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}
              >

                <TextField fullWidth id="login" label="Ваш логин" variant="outlined" />

                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <TextField type='mail' label='Email' />

                <TextField type='number' label='Код безопасности' />

                <Button color='rose' variant="contained" >
                  ВОЙТИ
                </Button>

              </Box>

              <Link className='link__more'> Напомнить  пароль</Link>

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
