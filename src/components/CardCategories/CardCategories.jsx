
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

import Cat1 from '../../assets/images/cat1.png';

import './CardCategories.css';

export const CardCategories = () => {

  return (

    <Card sx={{
      m: '5px',
      background:'#F7F7F7'
    }} >
      <CardActionArea >

        <CardContent >
          <img src={Cat1} alt='category' />

          <Typography gutterBottom variant="h6" component="div">
            Молодежные организации
          </Typography>

          <Typography variant="subtitle1" color="#686868">
            93
          </Typography>

        </CardContent>

      </CardActionArea>
    </Card>

  );
};

