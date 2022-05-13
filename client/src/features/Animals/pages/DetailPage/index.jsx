import { Box, Container, Grid, List, ListItem, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import animalsApi from '../../../../api/animalsApi';
import NotFound from '../../../../components/NotFound';
import Slider from '../../../../components/Slider';
import TabPanel from '../../components/TabPanel';

function DetailPage() {
  const [animal, setAnimal] = useState({});
  const [isNotFound, setIsNotFound] = useState(false);
  const [value, setValue] = useState(0);
  const { animalInfo } = useParams();
  const animal_ID = animalInfo.split('-').pop();

  useEffect(() => {
    (async animal_ID => {
      if (animal_ID === '' || isNaN(animal_ID)) {
        setIsNotFound(true);
        return;
      }
      const [response] = await animalsApi.get(animal_ID);
      setAnimal(response);
    })(animal_ID);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = index => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  return (
    <>
      {isNotFound ? (
        <NotFound />
      ) : (
        <main>
          <Container>
            <Grid container spacing={4} alignItems='center'>
              {animal?.images && (
                <Grid item sm={6}>
                  <Slider images={animal.images} />
                </Grid>
              )}
              <Grid item sm={6}>
                <Typography variant='h1' sx={{ fontSize: 32, fontWeight: 500 }}>
                  {animal?.vietnameseName}
                </Typography>
                <List>
                  <ListItem disableGutters sx={{ gap: 1, alignItems: 'flex-start' }}>
                    <Typography sx={{ flexShrink: 0, fontWeight: 600 }}>Tên khoa học:</Typography>
                    <Typography>{animal?.sciencetificName}</Typography>
                  </ListItem>
                  <ListItem disableGutters sx={{ gap: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>Tên địa phương:</Typography>
                    <Typography>{animal?.localName}</Typography>
                  </ListItem>
                  <ListItem disableGutters sx={{ gap: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>Giới:</Typography>
                    <Typography>{animal?.regnum}</Typography>
                  </ListItem>
                  <ListItem disableGutters sx={{ gap: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>Ngành:</Typography>
                    <Typography>{animal?.phylum}</Typography>
                  </ListItem>
                  <ListItem disableGutters sx={{ gap: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>Bộ:</Typography>
                    <Typography>{animal?.ordo}</Typography>
                  </ListItem>
                  <ListItem disableGutters sx={{ gap: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>Lớp:</Typography>
                    <Typography>{animal?.animalClass}</Typography>
                  </ListItem>
                  <ListItem disableGutters sx={{ gap: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>Họ:</Typography>
                    <Typography>{animal?.familia}</Typography>
                  </ListItem>
                </List>
              </Grid>
              <Grid item sm={12}>
                <Box sx={{ width: '100%' }}>
                  <Box>
                    <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                      <Tab sx={{ fontSize: 16, fontWeight: 600 }} label='Đặc điểm hình thái' {...a11yProps(0)} />
                      <Tab sx={{ fontSize: 16, fontWeight: 600 }} label='Đặc điểm sinh thái' {...a11yProps(1)} />
                      <Tab sx={{ fontSize: 16, fontWeight: 600 }} label='Tình trạng bảo tồn' {...a11yProps(2)} />
                      <Tab sx={{ fontSize: 16, fontWeight: 600 }} label='Thông tin mẫu vật' {...a11yProps(3)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <Typography>{animal?.morphological}</Typography>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Typography>Phân bố: {animal?.allocation}</Typography>
                    <Typography>Sinh cảnh: {animal?.habitat}</Typography>
                    <Typography>{animal?.ecological}</Typography>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Typography>Giá trị sử dụng: {animal?.usageValue}</Typography>
                    <Typography>Tình trạng bảo tồn theo IUCN: {animal?.IUCN}</Typography>
                    <Typography>Tình trạng bảo tồn theo sách đỏ Việt Nam: {animal?.redBook}</Typography>
                    <Typography>Tình trạng bảo tồn theo Nghị định 32/2006/NĐCP: {animal?.goverment}</Typography>
                    <Typography>Tình trạng bảo tồn theo CITES (40/2013/TT-BNNPTNT): {animal?.CITES}</Typography>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Typography>Tình trạng mẫu vật: {animal?.templateStatus}</Typography>
                    <Typography>Ngày thu mẫu: {animal?.postDate}</Typography>
                    <Typography>Tác giả: {animal?.author}</Typography>
                  </TabPanel>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </main>
      )}
    </>
  );
}

export default DetailPage;
