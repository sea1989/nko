
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { CardActionArea, CardHeader, Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import './Survey.css';
import { Link } from 'react-router-dom';

export const Survey = () => {

  return (

    <Card sx={{
      position: 'sticky',
      top: '0'
    }} >

      <CardHeader
        sx={{
          background: '#4478FF',
          color: '#fff'
        }}
        title='Опрос'
      />
      <CardContent >

        <Typography gutterBottom variant="h6" component="div">
          Являетесь ли Вы участниками грантовых конкурсов?
        </Typography>
        <FormControl>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="да"
            name="radio-buttons-group"
          >
            <FormControlLabel value="да" control={<Radio />} label="да" />
            <FormControlLabel value="нет" control={<Radio />} label="нет" />
            <FormControlLabel value="other" control={<Radio />} label="Необходима консультация специалистов" />
          </RadioGroup>

          <Button sx={{ my: 2 }} color='rose' variant="contained">
            ГОЛОСОВАТЬ
          </Button>

        </FormControl>

        <Link>Узнать результаты</Link>

      </CardContent>



    </Card>

  );
};

