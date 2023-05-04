import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import './Breadcrumb.css';



export const Breadcrumb = ({ list, currentPage }) => {



  return (
    // <ul className="breadcrumb">

    //   {list.map((item) => (
    //     <li key={item.id} className='breadcrumb__item'><Link to={item.link}>{item.title}</Link></li>
    //   ))}

    //   <li className='breadcrumb__item breadcrumb__item__active'>{currentPage}</li>
    // </ul>




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
