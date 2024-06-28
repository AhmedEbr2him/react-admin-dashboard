import { Box } from '@mui/material';
import Header from '../../components/Header';

import PieCharts from '../../components/PieCharts';

const Pie = () => {
  return (
    <Box m='20px'>
      <Header title='Pie CHARTS' subtitle='Simple Pie Charts' />

      <Box height='75vh'>
        <PieCharts />
      </Box>
    </Box>
  );
};

export default Pie;
