import { Container, Grid, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import Slider from '../../../../components/Slider';
import { BIRD_IMAGES } from '../../../../constant/images';
import './Content.scss';

Content.propTypes = {};

function Content(props) {
  const BIRD = {
    sciencetificName: 'Ichthyophis nguyenorum Nishikawa, Matsui, and Orlov, 2012',
    vietnameseName: 'Ếch giun nguyễn',
    localName: 'Rắn trun đĩa',
    regnum: 'Động vật (Animalia)',
    phylum: 'Động vật có dây sống (chordata)',
    class: 'AMPHIBIA (Linnaeus, 1758)',
    ordo: 'GYMNOPHIONA (Muller, 1832)',
    familia: 'Ichthyophiidae Taylor, 1968',
    images: BIRD_IMAGES,
    morphologicalCharacteristic: `
        Đặc điểm chẩn loại: cơ thể tròn, dẹt mặt bụng; chóp đuôi cùn, không có dạng mũ; không có đốm màu vàng mặt bụng; đầu rộng nhất ở góc mép miệng, hẹp dần về trước; mút mõm tròn; lỗ mũi nằm gần bờ trước mép miệng; số vòng quanh thân: 312 – 318; sọc vàng rộng chạy liên tục từ sau mắt đến huyệt (Nishikawa et al.,2012). 
        Đặc điểm hình thái: SVL 201,3 mm. Dài đuôi: 2,6 – 3,5; rộng đuôi: 2,8 – 3,5. Rộng đầu (HW: 6,6). Dài đầu hơn rộng đầu (HL/HW: 1,25-1,47). Cơ thể hơi tròn, dài, dạng rắn. Đầu dẹp, láng; rộng nhất ở mép miệng, hẹo về phía đầu. Mút mõm tròn; dài mõm bằng với ngang đầu ở vị trí mắt. Mắt nhỏ, không mi mắt, có một đôi râu (tentacle) ngắn nằm phía trước mắt. Hai bên thân có sọc  màu vàng bắt đầu từ sau mép miệng đến lỗ huyệt. Số nếp gấp quanh thân: 280 – 300; ở đuôi: 7-8. Đuôi ngắn hơi dẹt ở mặt bụng, phần đỉnh cùn, không có đốm màu cam hay vàng  ở mặt bụng. Mặt lưng có màu tím đen, bụng màu hoa cà nhạt, hai bên sườn có sọc màu vàng liên tục, không đứt quãng, chạy từ khoảng giữa hàm trên (mấu xúc - tu) đến gần mút đuôi. Mắt có viền mỏng màu trắng đục.
        Ghi chú:  Loài Ichthyophis bannanicus phân biệt với Ichthyophis nguyenorum dựa trên các đặc điểm: số nếp vòng quanh cơ thể của I. nguyenorum (312 – 318) ít hơn so với I. bannanicus (340); sọc bên thân của I. nguyenorum kéo dài đến mút đuôi so với sọc bị đứt quãng ở phía sau đuôi của I. bannanicus Nishikawa et al. (2012).`,
    ecologicalCharacteristic:
      'Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục, hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất, nhện và những loài không xương sống nhỏ khác.',
    usageValue: 'Chưa xác định',
    IUCN: 'LC (Least concern)',
    redBook: 'Sắp nguy cấp',
    goverment: 'Không nằm trong danh mục bảo tồn',
    CITES: 'Không có trong danh mục',
    allocation: 'Phổ biến',
    coordinates: [
      '9.571639 N, 105.748757 E ',
      '9.563858 N, 105.742898 E',
      '9.572843 N, 105.745688 E',
      '9.571639 N, 105.748757 E',
      '9.571639 N, 105.748757 E',
    ],
    templateStatus: 'Thu được mẫu',
    habitat: 'Rừng tràm đặc dụng,  rừng tràm trồng',
    address: 'Rừng Tràm Mỹ Phước, Mỹ Phước, Mỹ Tú, Sóc Trăng',
    date: '4/13/2018',
    author: 'Nguyễn Quang Cường',
  };

  return (
    <Container className='content'>
      <Grid container spacing={4}>
        <Grid container item spacing={4}>
          <Grid item lg={6}>
            <Slider images={BIRD.images} variant='secondary' />
          </Grid>
          <Grid item lg={6}>
            <List className='content__list' sx={{ p: 2 }}>
              <ListItem className='content__item'>
                <Typography variant='h5'>{BIRD.vietnameseName}</Typography>
              </ListItem>
              <ListItem className='content__item'>Tên khoa học: {BIRD.sciencetificName}</ListItem>
              <ListItem className='content__item'>Tên địa phương: {BIRD.localName}</ListItem>
              <ListItem className='content__item'>Giới: {BIRD.regnum}</ListItem>
              <ListItem className='content__item'>Ngành: {BIRD.phylum}</ListItem>
              <ListItem className='content__item'>Lớp: {BIRD.class}</ListItem>
              <ListItem className='content__item'>Bộ: {BIRD.ordo}</ListItem>
              <ListItem className='content__item'>Họ: {BIRD.familia}</ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container item spacing={4}>
          <Grid item lg={6}>
            <List className='content__list' sx={{ p: 2 }}>
              <ListItem className='content__item'>Phân bố: {BIRD.allocation}</ListItem>
              <ListItem className='content__item'>
                Toạ độ: {BIRD.coordinates.map(coordinate => `(${coordinate}), `)}{' '}
              </ListItem>
              <ListItem className='content__item'>Sinh cảnh: {BIRD.habitat}</ListItem>
              <ListItem className='content__item'>Địa điểm: {BIRD.address}</ListItem>
            </List>
          </Grid>
          <Grid item lg={6}>
            <List className='content__list' sx={{ p: 2 }}>
              <ListItem className='content__item'>Tình trạng bảo tồn theo IUCN: {BIRD.IUCN}</ListItem>
              <ListItem className='content__item'>Tình trạng bảo tồn theo sách đỏ Việt Nam: {BIRD.redBook}</ListItem>
              <ListItem className='content__item'>
                Tình trạng bảo tồn theo Nghị định 32/2006/NĐCP: {BIRD.goverment}
              </ListItem>
              <ListItem className='content__item'>
                Tình trạng bảo tồn theo CITES (40/2013/TT-BNNPTNT): {BIRD.CITES}
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container item spacing={4}>
          <Grid item>
            <List className='content__list' sx={{ p: 2 }}>
              <ListItem className='content__item'>Đặc điểm hình thái: {BIRD.morphologicalCharacteristic}</ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container item spacing={4}>
          <Grid item lg={7}>
            <List className='content__list' sx={{ p: 2 }}>
              <ListItem className='content__item'>Đặc điểm sinh thái: {BIRD.ecologicalCharacteristic}</ListItem>
            </List>
          </Grid>
          <Grid item lg={5}>
            <List className='content__list' sx={{ p: 2 }}>
              <ListItem className='content__item'>Trạng thái mẫu vật: {BIRD.templateStatus}</ListItem>
              <ListItem className='content__item'>Ngày thu mẫu: {BIRD.date}</ListItem>
              <ListItem className='content__item'>Người thu mẫu: {BIRD.author}</ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Content;
