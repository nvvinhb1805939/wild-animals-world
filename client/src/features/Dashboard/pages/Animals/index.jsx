import AddIcon from '@mui/icons-material/Add';
import { alpha, Avatar, Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomTooltip from '../../../../components/CustomTooltip';
import STATUS from '../../../../constant/status';
import toSpinalCase from '../../../../utils/spinalCase';
import { fetchAnimals } from '../../../Animals/animalsSlice';
import CustomDataGrid from '../../components/CustomDataGrid';
import Heading from '../../components/Heading';
import MenuPopover from '../../components/MenuPopover';

const ICON_CELL_WIDTH = 100;

function AnimalPage() {
  const dispatch = useDispatch();
  const response = useSelector(state => state.animals);
  const user = useSelector(state => state.user.data);
  const { animals } = response;
  const dataGrid = useMemo(
    () => ({
      columns: [
        {
          field: 'id',
          headerName: 'ID',
          headerAlign: 'center',
          align: 'center',
          width: ICON_CELL_WIDTH,
        },
        {
          field: 'name',
          headerName: 'Động vật',
          flex: 1.25,
          renderCell: params => (
            <Stack direction='row' alignItems='center' sx={{ gap: 2, width: '100%' }}>
              <Avatar
                src={params.row?.url}
                alt={params.value}
                imgProps={{
                  loading: 'lazy',
                }}
              />
              <Typography sx={{ fontWeight: 500, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                {params.value}
              </Typography>
            </Stack>
          ),
        },
        {
          field: 'localName',
          headerName: 'Tên địa phương',
          flex: 1,
        },
        {
          field: 'createDate',
          headerName: 'Ngày đăng',
          flex: 1,
        },
        {
          field: 'status',
          headerName: 'Trạng thái',
          width: ICON_CELL_WIDTH + ICON_CELL_WIDTH / 2,
          renderCell: params => {
            const currentStatus = STATUS[params.value];
            return (
              <Box
                sx={{
                  p: 1,
                  fontSize: 14,
                  fontWeight: 500,
                  color: `${currentStatus.variant}.main`,
                  bgcolor: theme => alpha(theme.palette[currentStatus.variant].main, 0.1),
                  borderRadius: 3,
                }}
              >
                {currentStatus.description}
              </Box>
            );
          },
        },
        {
          field: 'control',
          headerName: '',
          width: ICON_CELL_WIDTH,
          align: 'center',
          sortable: false,
          renderCell: params => <MenuPopover path={toSpinalCase(`${params.row.name}-${params.row.id}`)} />,
        },
      ],
      rows: Array.isArray(animals)
        ? [
            ...animals?.map(animal => ({
              id: animal.animal_ID,
              name: animal.vietnameseName,
              url: animal.images[0]?.url,
              localName: animal.localName,
              createDate: animal.postDate,
              status: animal.status,
            })),
          ]
        : [],
    }),
    [animals.length]
  );

  useEffect(() => {
    const getAllAnimals = async user_ID => {
      await dispatch(fetchAnimals(user_ID));
    };
    getAllAnimals(user.user_ID);
  }, [animals.length]);

  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Heading text='Động vật' />
        <Box sx={{ '& a': { display: 'block', width: '100%', height: '100%', borderRadius: '50%' } }}>
          <CustomTooltip title='Thêm động vật'>
            <Link to='add'>
              <Button rounded='true' size='medium'>
                <AddIcon sx={{ width: 32, height: 32 }} />
              </Button>
            </Link>
          </CustomTooltip>
        </Box>
      </Stack>
      <Box
        sx={{
          mt: 4,
          bgcolor: 'foreground.main',
          boxShadow: 0,
          borderRadius: 2,
        }}
      >
        <CustomDataGrid
          columns={dataGrid.columns}
          rows={dataGrid.rows}
          loading={response.loading || animals.length === 0}
        />
      </Box>
    </Box>
  );
}

export default AnimalPage;
