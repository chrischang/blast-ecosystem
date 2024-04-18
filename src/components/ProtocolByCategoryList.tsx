import { FC } from 'react';
import { Protocol } from '../protocols';
import { Box, Container, Typography } from '@mui/material';
import ProtocolItem from './ProtocolItem';

const ProtocolByCategoryList: FC<{ groupProtocols: Protocol[][] }> = ({
  groupProtocols,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        flexWrap: '1rem',
      }}
    >
      {groupProtocols.map((group) => {
        return (
          <Container
            key={group[0].category}
            sx={{
              border: '1px solid rgb(252 252 3)',
              borderRadius: 1,
              py: '1rem',
            }}
          >
            <Typography fontSize={20} fontWeight={'bold'} mb={'1rem'}>
              {group[0].category}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                flexWrap: 'wrap',
                gap: '2rem',
              }}
            >
              {group.map((protocol) => {
                return <ProtocolItem key={protocol.name} protocol={protocol} />;
              })}
            </Box>
          </Container>
        );
      })}
    </Box>
  );
};
export default ProtocolByCategoryList;
