import Pagination from '@mui/material/Pagination';
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import React from 'react';

function CustomPaginatinon(props) {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color='primary'
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
      sx={{
        '& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected': {
          color: 'foreground.main',
          pointerEvents: 'none',
        },
      }}
    />
  );
}

export default CustomPaginatinon;
