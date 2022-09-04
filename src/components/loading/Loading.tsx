// Vendors
import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

// Styles
import { Wrapper } from './Loading.style';

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <CircularProgress />
        <Typography variant="h5" gutterBottom>
          Loading...
        </Typography>
      </div>
    </Wrapper>
  );
};

export default memo(Loading);
