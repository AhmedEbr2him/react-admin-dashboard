import { Box } from '@mui/material';
import Header from '../../components/Header';
import LineCharts from '../../components/LineCharts';

const Line = () => {
  return (
    <Box m='20px'>
      <Header title='Pie CHARTS' subtitle='Simple Pie Charts' />

      <Box height='75vh'>
        <LineCharts />
      </Box>
    </Box>
  );
};
export default Line;
