import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import CustomPaginatinon from '../CustomPagination';

CustomDataGrid.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};
CustomDataGrid.defaultProps = {
  loading: true,
};

const ROW_HEIGHT = 60;
const PAGE_SIZE = 5;

function CustomDataGrid({ columns, rows, loading }) {
  return (
    <Box sx={{ height: ROW_HEIGHT * (PAGE_SIZE + 2) }}>
      <DataGrid
        columns={columns}
        rows={rows}
        rowHeight={ROW_HEIGHT}
        headerHeight={ROW_HEIGHT}
        pageSize={PAGE_SIZE}
        disableSelectionOnClick
        disableColumnMenu
        // loading={loading}
        pagination
        components={{
          Pagination: CustomPaginatinon,
        }}
        sx={{
          fontSize: 16,
          border: 'none',

          '&.MuiDataGrid-root .MuiDataGrid-columnHeader .MuiDataGrid-iconButtonContainer': { width: '0 !important' },
          '&.MuiDataGrid-root .MuiDataGrid-footerContainer': {
            height: ROW_HEIGHT,
          },
          [`&.MuiDataGrid-root .MuiDataGrid-row:nth-of-type(${PAGE_SIZE}n) .MuiDataGrid-cell`]: {
            borderBottom: 0,
          },
          '&.MuiDataGrid-root .MuiDataGrid-columnHeader': {
            outline: 'none',
          },
          '&.MuiDataGrid-root .MuiDataGrid-cell': {
            outline: 'none',
          },
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
        }}
      />
    </Box>
  );
}

export default memo(CustomDataGrid);
