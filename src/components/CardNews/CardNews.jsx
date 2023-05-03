
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';

import News1 from '../../assets/images/news1.png';

import './CardNews.css';

export const CardNews = () => {

  return (

    <Card >
      <CardActionArea >
        <CardMedia
          component="img"
          height="180"
          src={News1}
          alt="green iguana"
        />
        <CardContent >
          <Typography variant="subtitle1" color="#686868">
            02 МАРТА 2023
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Опрос
          </Typography>
          <Box textAlign={'end'}>
            <SouthEastOutlinedIcon color='primary' />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>

  );
};

