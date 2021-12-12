import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';



const palette = {
    primary: {
      main: '#8C3D2B',
      darker: '#595622',
    },
    // neutral: {
    //   main: '#64748B',
    //   contrastText: '#fff',
    // },
  };

const FunkyButton = styled(Button)(({ theme }) => ({
  color: palette.primary.darker,
  fontFamily: 'Amatic SC',
  margin: 5,
  fontSize: '2rem',
}));

export default FunkyButton;