import React from 'react';
import './support-page.css';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { CardSupport } from '../../components/CardSupport/CardSupport';
import { Button } from '@mui/material';
// import TabPanel from '@mui/lab/TabPanel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const SupportPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
  ];

  const currentPage = 'Меры фин поддержки НКО';

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main>
      <Container>

        <Breadcrumb list={projectsList} currentPage={currentPage} />

        <Paper square elevation={0}
          sx={{
            position: 'relative',
            backgroundColor: '#fff',
            color: '#000',
            pt: '20px',
            pb: '80px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >

          <Typography mb={2} variant="h4" component="h2">
            Меры финансовой поддержки НКО
          </Typography>

          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Федеральные" {...a11yProps(0)} />
                <Tab label="Региональные" {...a11yProps(1)} />
                <Tab label="Муниципальные" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
              <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                  <CardSupport />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CardSupport />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CardSupport />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CardSupport />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                  <CardSupport />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CardSupport />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                  <CardSupport />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CardSupport />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CardSupport />
                </Grid>
              </Grid>
            </TabPanel>
          </Box>

          <Button variant='contained' size='large' color='rose'> архив мер поддержки</Button>

        </Paper>

      </Container>



    </main>
  );
};
