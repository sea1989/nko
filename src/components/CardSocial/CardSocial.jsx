import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import { setCurrentProject } from '../../redux/project/reducer';

import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import Social1 from '../../assets/images/social1.jpg';

import './CardSocial.css';
import { useNavigate } from 'react-router-dom';

export const CardSocial = ({ project }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setCurrentProject(project));
    navigate('/card-details');
  }

  return (

    <Card >
      <CardActionArea onClick={handleClick}>

        <Box
          sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
          display={'flex'}>
          <CardMedia
            component="img"
            // height="180"
            src={project.img}
            alt={project.alt}
          />

          <CardContent >
            <Typography variant="subtitle1" color="#686868">
              {project.date}
            </Typography>
            <Typography gutterBottom variant="subtitle2" >
              {project.title}
            </Typography>

            <Typography sx={{ maxHeight: '157px', overflow: 'hidden', mb: '7px' }} variant="subtitle2" color="#686868">
              {project.text}
            </Typography>
            <Box pt={2} textAlign={'end'}>
              <SouthEastOutlinedIcon color='primary' />
            </Box>
          </CardContent>
        </Box>

      </CardActionArea>
    </Card >

  );
};

