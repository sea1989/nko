import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';

import './CardSupport.css';
import { Link } from 'react-router-dom';

export const CardSupport = () => {

  return (

    <Card sx={{ background: '#F7F7F7' }} >
      <CardActionArea>

        <CardContent >
          <Typography gutterBottom p={1} variant="subtitle2" sx={{ background: '#D5FFAF', borderRadius: '6px', display: 'flex', width: 'fit-content' }}>
            ДЕЙСТВУЕТ
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ФПГ 2023
          </Typography>

          <Typography py={1} color={'#686868'} gutterBottom variant="body2" >
            Короткое описание
          </Typography>

          <Link className='link__more' to='/'>
            ПРИЕМ ДО 27 ФЕВРАЛЯ 2023
          </Link>

          <Box pt={2} textAlign={'end'}>
            <SouthEastOutlinedIcon color='primary' />
          </Box>

        </CardContent>

      </CardActionArea>
    </Card >

  );
};

