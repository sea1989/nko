
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

import './CardNewNKO.css';

export const CardNewNKO = () => {

  return (

    <Card sx={{
      background: '#F7F7F7'
    }} >
      <CardActionArea >

        <CardContent >

          <span className='link__more'>15.02.2023</span>

          <Typography gutterBottom variant="body1" component="p">
            Региональная спортивная общественная организация "Федерация
            фехтования Сахалинской области"
          </Typography>

        </CardContent>

      </CardActionArea>
    </Card>

  );
};

