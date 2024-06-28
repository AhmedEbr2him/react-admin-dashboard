import { Box } from '@mui/material';
import Header from '../../components/Header';
import GeoCharts from '../../components/GeoCharts';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m='20px'>
      <Header title='Pie CHARTS' subtitle='Simple Pie Charts' />

      <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
        <GeoCharts />
      </Box>
    </Box>
  );
};

export default Geography;
