
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentNews } from '../../redux/news/reducer';
import { useNavigate } from 'react-router-dom';

import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';

import News1 from '../../assets/images/news1.png';

import './CardNews.css';

export const CardNews = ({ props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setCurrentNews(props));
    navigate(`/news-details/${props.id}`);
  }

  return (

    <Card>
      <CardActionArea onClick={handleClick} >
        <CardMedia
          component="img"
          height="180"
          src={props.img}
          alt={props.alt}
        />
        <CardContent >
          <Typography variant="subtitle1" color="#686868">
            {props.date}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Box textAlign={'end'}>
            <SouthEastOutlinedIcon color='primary' />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

