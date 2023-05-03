
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';

import News1 from '../../assets/images/news1.png';

import './CardNewsText.css';

export const CardNewsText = () => {

  return (

    <Card >
      <CardActionArea>

        <CardContent >
          <Typography variant="subtitle1" color="#686868">
            02 МАРТА 2023
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Опрос
          </Typography>

          <Typography sx={{ maxHeight: '157px', overflow: 'hidden', mb: '7px' }} variant="subtitle2" color="#686868">
            Торжественное мероприятие, посвященное Всемирному Дню НКО, прошло в г.
            Южно-Сахалинске.
            27 февраля 2023 года в ДК Родина г. Южно-Сахалинска состоялось торжественное
            мероприятие,
            посвященное Всемирному Дню НКО. На праздник съехались представители...
          </Typography>
          <Box pt={2} textAlign={'end'}>
            <SouthEastOutlinedIcon color='primary' />
          </Box>
        </CardContent>


      </CardActionArea>
    </Card>

  );
};

