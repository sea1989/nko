import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';

import './CardNewsText.css';

export const CardNewsText = ({ props }) => {

  return (

    <Card >
      <CardActionArea>

        <CardContent >
          <Typography variant="subtitle1" color="#686868">
            {props.date}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>

          <Typography sx={{ maxHeight: '157px', overflow: 'hidden', mb: '7px' }} variant="subtitle2" color="#686868">
            {props.text}
          </Typography>
          <Box pt={2} textAlign={'end'}>
            <SouthEastOutlinedIcon color='primary' />
          </Box>
        </CardContent>

      </CardActionArea>
    </Card>

  );
};

