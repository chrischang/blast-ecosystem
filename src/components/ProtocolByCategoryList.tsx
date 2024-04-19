import { FC, useMemo, useState } from 'react';
import { Category, Protocol } from '../protocols';
import { Box, Chip, Container, Typography } from '@mui/material';
import ProtocolItem from './ProtocolItem';

const ProtocolByCategoryList: FC<{ groupProtocols: Protocol[][] }> = ({
  groupProtocols,
}) => {
  const [filter, setFilter] = useState<Category | null>(null);

  const filteredGroupProtocols = useMemo(() => {
    return filter
      ? groupProtocols.filter((group) => group[0].category === filter)
      : groupProtocols;
  }, [filter, groupProtocols]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box sx={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
        {groupProtocols.map((group) => {
          const category = group[0].category;
          return (
            <Chip
              key={category}
              label={category}
              color={filter === category ? 'primary' : 'default'}
              onClick={() =>
                filter === category ? setFilter(null) : setFilter(category)
              }
            />
          );
        })}
        {filter && (
          <Chip
            color="error"
            label="Clear Filter"
            onClick={() => setFilter(null)}
          />
        )}
      </Box>
      {filteredGroupProtocols.map((group) => (
        <Container
          key={group[0].category}
          sx={{
            border: '1px solid rgb(252, 252, 3)',
            borderRadius: 1,
            py: '1rem',
          }}
        >
          <Typography fontSize={20} fontWeight="bold" mb="1rem">
            {group[0].category}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '2rem',
            }}
          >
            {group.map((protocol) => (
              <ProtocolItem key={protocol.name} protocol={protocol} />
            ))}
          </Box>
        </Container>
      ))}
    </Box>
  );
};

export default ProtocolByCategoryList;
