import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

import './CardCalendar.css';
import { Link } from 'react-router-dom';

export const CardCalendar = () => {

  return (

    <Card sx={{
      background: ' #FFE4C5'
    }}>
      <CardActionArea>

        <CardContent >
          <Typography variant="subtitle1" color="#686868">
            02 МАРТА 2023
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Событие 1
          </Typography>

          <Link className='link__more' >
            Подробнее →
          </Link>
        </CardContent>

      </CardActionArea>
    </Card>

  );
};

