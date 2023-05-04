import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';

import bg from '../../assets/images/promo-bg.jpg'

import './Promo.css';

const top100Films = [
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },

];

const Promo = () => {

  return (

    <Paper square
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        pt: '100px',
        pb: '80px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${bg})`,
      }}
    >

      <Container>


        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={6}>
            <TextField
              sx={{
                '& .MuiInputBase-root': {
                  background: 'white'
                }
              }}
              fullWidth id="outlined-basic" label="Хочу узнать" variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={3}>
            <Autocomplete
              sx={{
                '& .MuiInputBase-root': {
                  background: 'white'
                }
              }}
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Button fullWidth sx={{ p: '14px 22px' }} size='large' color='rose' variant="contained">
              ПОИСК ПО КАТАЛОГУ
            </Button>
          </Grid>
        </Grid>

        <Grid sx={{ pt: '30px' }} container spacing={2}>
          <Grid gap={1} display={'flex'} item xs={12} md={3}>
            <SearchIcon />
            <Link className='promo__link'>
              Расширенный поиск
            </Link>
          </Grid>

          <Grid display={'flex'} gap={1} item xs={12} md={3}>
            <LeaderboardOutlinedIcon />
            <Link className='promo__link'>
              Рейтинг НКО
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Promo;
