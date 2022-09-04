// Vendors
import { styled } from '@mui/material/styles';

export const Item = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid gray',
  '& .MuiButtonBase-root': {
    borderRadius: 0,
  },
});
