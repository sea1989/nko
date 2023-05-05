import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

import './Breadcrumb.css';



export const Breadcrumb = ({ list, currentPage }) => {


  return (

    <Breadcrumbs sx={{ pt: '60px' }} separator="-" aria-label="breadcrumb">

      {list.map((item) => (
        <Link className='link__more' to={item.link}>
          {item.title}
        </Link>
      ))}

      <Typography color="primary.rose">{currentPage}</Typography>
    </Breadcrumbs>

  );
};
