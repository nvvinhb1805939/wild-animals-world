import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Button, Grid, Input, InputLabel, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomTooltip from '../../../../components/CustomTooltip';
import InputField from '../../../../components/form-controls/InputField';

Form.propTypes = {
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
  isAddMode: PropTypes.bool,
};
Form.defaultProps = {
  onSubmit: null,
  defaultValues: {},
  isAddMode: true,
};

function Form({ onSubmit, defaultValues, isAddMode }) {
  console.log(defaultValues);
  const [selectedImages, setSelectedImages] = useState(() => {
    console.log(defaultValues.length);
    if (isAddMode) return [];
    if (defaultValues.length == 0) return {};
    return defaultValues.images.map(image => image.url);
  });
  const imagesInputRef = useRef();
  console.log(selectedImages);
  const { formState, handleSubmit, control } = useForm({
    defaultValues: defaultValues,
  });

  const handleImageChange = e => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setSelectedImages(prevImages => prevImages.concat(filesArray));
      Array.from(e.target.files).map(file => URL.revokeObjectURL(file));
    }
  };

  const renderPreviewPhotos = photos => {
    if (!Array.isArray(photos)) return;
    photos.map(photo => (
      <Grid item lg={4} key={photo} sx={{ '& img': { width: '100%', height: '100%' } }}>
        {console.log(photo)}
        <img src={photo} alt='img' />
      </Grid>
    ));
  };

  const handleOnSubmit = data => {
    console.log(data);
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    Array.from(imagesInputRef.current.files).forEach(file => {
      formData.append('images', file);
    });

    // if (onSubmit) onSubmit(formData);
  };

  return (
    <Stack
      component='form'
      onSubmit={handleSubmit(handleOnSubmit)}
      sx={{ p: 3, mt: 4, bgcolor: 'foreground.main', borderRadius: 3, boxShadow: 0 }}
    >
      <Grid container spacing={3}>
        <Grid container item lg={12} spacing={3}>
          <Grid item lg={6}>
            <InputField control={control} name='vietnameseName' label='Tên Việt Nam' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='localName' label='Tên địa phương' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='sciencetificName' label='Tên khoa học' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='familia' label='Họ' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='ordo' label='Bộ' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='animalClass' label='Lớp' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='phylum' label='Ngành' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='regnum' label='Giới' />
          </Grid>
        </Grid>
        <Grid container item lg={12} spacing={3}>
          <Grid item lg={12}>
            <InputField control={control} name='morphological' label='Đặc điểm hình thái' autoSize={true} />
          </Grid>
        </Grid>
        <Grid container item lg={12} spacing={3}>
          <Grid item lg={12}>
            <InputField control={control} name='ecological' label='Đặc điểm sinh thái' autoSize={true} />
          </Grid>
        </Grid>
        <Grid container item lg={12} spacing={3}>
          <Grid item lg={6}>
            <InputField control={control} name='IUCN' label='Tình trạng bảo tồn theo IUCN' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='redBook' label='Tình trạng bảo tồn theo Sách đỏ Việt Nam' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='goverment' label='Tình trạng bảo tồn theo Nghị định 32/2006/NĐCP' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='CITES' label='Tình trạng bảo tồn theo CITES' />
          </Grid>
        </Grid>
        <Grid container item lg={12} spacing={3}>
          <Grid item lg>
            <InputField control={control} name='habitat' label='Sinh cảnh' autoSize={true} />
          </Grid>
        </Grid>
        <Grid container item lg={12} spacing={3}>
          <Grid item lg>
            <InputField control={control} name='usageValue' label='Giá trị sử dụng' autoSize={true} />
          </Grid>
        </Grid>
        <Grid container item lg={12} spacing={3}>
          <Grid item lg={6}>
            <InputField control={control} name='allocation' label='Phân bố' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='templateStatus' label='Tình trạng mẫu' />
          </Grid>
        </Grid>
        <Grid container item lg={12} spacing={3} sx={{ display: ' none' }}>
          <Grid item lg={6}>
            <InputField control={control} name='author' label='Tác giả' />
          </Grid>
          <Grid item lg={6}>
            <InputField control={control} name='user_ID ' label='User ID' />
          </Grid>
        </Grid>
        <Grid container item lg={12} spacing={3}>
          <Grid item lg={4}>
            <CustomTooltip title='Thêm ảnh' placement='right'>
              <InputLabel
                htmlFor='images'
                sx={{ display: 'block', width: 'fit-content' }}
                onClick={e => {
                  if (e.target !== e.currentTarget) e.currentTarget.click();
                }}
              >
                <Button size='large'>
                  <AddAPhotoIcon />
                </Button>
              </InputLabel>
            </CustomTooltip>
            <Input
              id='images'
              name='images'
              type='file'
              inputProps={{
                multiple: true,
                accept: 'image/*',
              }}
              sx={{ display: 'none' }}
              onChange={handleImageChange}
              inputRef={imagesInputRef}
            />
          </Grid>
          <Grid container item lg={12} spacing={3}>
            {renderPreviewPhotos(selectedImages)}
          </Grid>
        </Grid>
        <Grid item lg={4}>
          <Button type='submit' fullWidth variant='contained'>
            Lưu
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Form;
