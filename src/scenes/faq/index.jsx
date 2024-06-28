import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt autem error quasi soluta
          doloribus neque, vero dicta fugit voluptatum? Alias ad necessitatibus culpa vero nesciunt
          sed, natus molestiae magnam voluptatem.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt autem error quasi soluta
          doloribus neque, vero dicta fugit voluptatum? Alias ad necessitatibus culpa vero nesciunt
          sed, natus molestiae magnam voluptatem.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt autem error quasi soluta
          doloribus neque, vero dicta fugit voluptatum? Alias ad necessitatibus culpa vero nesciunt
          sed, natus molestiae magnam voluptatem.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt autem error quasi soluta
          doloribus neque, vero dicta fugit voluptatum? Alias ad necessitatibus culpa vero nesciunt
          sed, natus molestiae magnam voluptatem.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt autem error quasi soluta
          doloribus neque, vero dicta fugit voluptatum? Alias ad necessitatibus culpa vero nesciunt
          sed, natus molestiae magnam voluptatem.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ;
