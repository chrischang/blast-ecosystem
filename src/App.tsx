import { FC, useMemo } from 'react';
import { protocols } from './protocols';
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';
import blastLogo from './images/blast.png';
import { groupByCategory } from './utils';
import ProtocolByCategoryList from './components/ProtocolByCategoryList';
import MissingProtocolButton from './components/MissingProtocolButton';
import Disclaimer from './components/Disclaimer';
const App: FC = () => {
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#9ba885',
        },
      },
      typography: {
        fontFamily: '"Chakra Petch", sans-serif',
      },
    });
  }, []);

  const groupProtocols = useMemo(() => {
    return groupByCategory(protocols);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MissingProtocolButton />
      <Box sx={{ background: 'rgb(17 17 5)', minHeight: '100vh' }}>
        <Container
          maxWidth={'md'}
          sx={{
            py: '4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Box component={'img'} src={blastLogo} width={'200px'} mb={'1rem'} />
          <Typography component={'h1'} variant={'h5'} fontWeight={'bold'}>
            Unofficial Blast Ecosystem Map
          </Typography>
          <ProtocolByCategoryList groupProtocols={groupProtocols} />
        </Container>
      </Box>
      <Disclaimer />
    </ThemeProvider>
  );
};

export default App;
