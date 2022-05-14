import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
  InputLabel,
  Stack,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import animalsApi from '../../../../api/animalsApi';
import CustomTooltip from '../../../../components/CustomTooltip';
import InputField from '../../../../components/form-controls/InputField';
import Heading from '../../components/Heading';

function AddUpdateAnimal(props) {
  const user = useSelector(state => state.user.data);
  const params = useParams();
  const { state } = useLocation();
  const [status, setStatus] = useState(null);
  const updatedAnimalID = parseInt(params.animal_ID?.split('-').pop());
  const isAddMode = !updatedAnimalID;
  const isExpertMode = state?.isDisabled;

  const defaultValues = {
    sciencetificName: '',
    vietnameseName: '',
    localName: '',
    regnum: '',
    phylum: '',
    animalClass: '',
    ordo: '',
    familia: '',
    morphological: '',
    ecological: '',
    usageValue: '',
    IUCN: '',
    redBook: '',
    goverment: '',
    CITES: '',
    allocation: '',
    templateStatus: '',
    habitat: '',
    author: user.fullname,
    user_ID: user.user_ID,
  };
  const { formState, reset, handleSubmit, control, getValues } = useForm({
    defaultValues,
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);

  useEffect(() => {
    if (isAddMode) return;
    (async animal_ID => {
      const [response] = await animalsApi.get(animal_ID);
      reset(response);
      const { images } = response;
      // setSelectedImages(images.map(image => image.url));
      setSelectedImages(images);
    })(updatedAnimalID);
  }, [reset]);

  const handleImageChange = e => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map(file => ({
        image_ID: '',
        url: URL.createObjectURL(file),
        file,
      }));
      setSelectedImages(prevImages => prevImages.concat(filesArray));
      Array.from(e.target.files).map(file => URL.revokeObjectURL(file));
    }
  };

  const handleDeleteImage = index => {
    const newImages = [...selectedImages];
    const [deletedImage] = newImages.splice(index, 1);
    if (deletedImage.image_ID) setDeletedImages([...deletedImages, deletedImage.image_ID]);
    setSelectedImages(newImages);
  };

  const renderPreviewPhotos = photos => {
    return photos.map((photo, index) => (
      <ImageListItem key={index} sx={{ '& img': { width: '100%', minHeight: 40 } }}>
        <img src={photo.url} alt='img' />
        {!isExpertMode && (
          <CustomTooltip title='Xoá hình ảnh' placement='left'>
            <ImageListItemBar
              onClick={() => {
                handleDeleteImage(index);
              }}
              sx={{
                left: 'unset',
                width: 'fit-content',
                cursor: 'pointer',

                '& .MuiImageListItemBar-titleWrap': {
                  display: 'none',
                },
                '& .MuiIconButton-root': {
                  color: 'foreground.main',
                },
                '&:hover .MuiIconButton-root': {
                  color: 'error.main',
                },
              }}
              position='top'
              actionIcon={
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              }
            />
          </CustomTooltip>
        )}
      </ImageListItem>
    ));
  };

  const handleOnSubmit = async data => {
    const formData = new FormData();
    const date = new Date(Date.now()).toLocaleString('en-GB');
    const imageFileList = selectedImages.reduce((prevImageFileList, selectedImage) => {
      if (selectedImage.hasOwnProperty('file')) return prevImageFileList.concat(selectedImage.file);
      return prevImageFileList;
    }, []);

    for (let key in data) {
      if (key !== 'images') formData.set(key, data[key]);
    }
    formData.set('status', status);

    if (isExpertMode) {
      formData.set('expert_ID', user.user_ID);
      formData.set('expertName', user.fullname);
      formData.set('viewedDate', date);
    } else {
      formData.set('postDate', date);
      formData.set('viewedDate', '');
      formData.set('rejectedReason', '');
      imageFileList.forEach(imageFileItem => {
        formData.append('images', imageFileItem);
      });
      deletedImages.forEach(deletedImage => {
        formData.append('deletedImages[]', deletedImage);
      });
    }

    if (isAddMode) {
      const response = await animalsApi.add(formData);
      reset();
      setSelectedImages([]);
      window.alert(response.message);
    } else {
      const response = await animalsApi.update(formData);
      window.alert(response.message);
    }
  };

  return (
    <Box>
      <Heading text={isAddMode ? 'Thêm động vật' : 'Cập nhật thông tin động vật'} />
      <Stack
        component='form'
        onSubmit={handleSubmit(handleOnSubmit)}
        sx={{ p: 3, mt: 4, bgcolor: 'foreground.main', borderRadius: 3, boxShadow: 0 }}
      >
        <Grid container spacing={3}>
          <Grid container item lg={12} spacing={3}>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='vietnameseName' label='Tên Việt Nam' />
            </Grid>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='localName' label='Tên địa phương' />
            </Grid>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='sciencetificName' label='Tên khoa học' />
            </Grid>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='familia' label='Họ' />
            </Grid>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='ordo' label='Bộ' />
            </Grid>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='animalClass' label='Lớp' />
            </Grid>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='phylum' label='Ngành' />
            </Grid>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='regnum' label='Giới' />
            </Grid>
          </Grid>
          <Grid container item lg={12} spacing={3}>
            <Grid item lg={12}>
              <InputField
                disabled={state?.isDisabled}
                control={control}
                name='morphological'
                label='Đặc điểm hình thái'
                autoSize={true}
              />
            </Grid>
          </Grid>
          <Grid container item lg={12} spacing={3}>
            <Grid item lg={12}>
              <InputField
                disabled={state?.isDisabled}
                control={control}
                name='ecological'
                label='Đặc điểm sinh thái'
                autoSize={true}
              />
            </Grid>
          </Grid>
          <Grid container item lg={12} spacing={3}>
            <Grid item lg={6}>
              <InputField
                disabled={state?.isDisabled}
                control={control}
                name='IUCN'
                label='Tình trạng bảo tồn theo IUCN'
              />
            </Grid>
            <Grid item lg={6}>
              <InputField
                disabled={state?.isDisabled}
                control={control}
                name='redBook'
                label='Tình trạng bảo tồn theo Sách đỏ Việt Nam'
              />
            </Grid>
            <Grid item lg={6}>
              <InputField
                disabled={state?.isDisabled}
                control={control}
                name='goverment'
                label='Tình trạng bảo tồn theo Nghị định 32/2006/NĐCP'
              />
            </Grid>
            <Grid item lg={6}>
              <InputField
                disabled={state?.isDisabled}
                control={control}
                name='CITES'
                label='Tình trạng bảo tồn theo CITES'
              />
            </Grid>
          </Grid>
          <Grid container item lg={12} spacing={3}>
            <Grid item lg>
              <InputField
                disabled={state?.isDisabled}
                control={control}
                name='habitat'
                label='Sinh cảnh'
                autoSize={true}
              />
            </Grid>
          </Grid>
          <Grid container item lg={12} spacing={3}>
            <Grid item lg>
              <InputField
                disabled={state?.isDisabled}
                control={control}
                name='usageValue'
                label='Giá trị sử dụng'
                autoSize={true}
              />
            </Grid>
          </Grid>
          <Grid container item lg={12} spacing={3}>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='allocation' label='Phân bố' />
            </Grid>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='templateStatus' label='Tình trạng mẫu' />
            </Grid>
          </Grid>
          <Grid container item lg={12} spacing={3} sx={{ display: ' none' }}>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='author' label='Tác giả' />
            </Grid>
            <Grid item lg={6}>
              <InputField disabled={state?.isDisabled} control={control} name='user_ID' label='User ID' />
            </Grid>
          </Grid>
          {!!getValues('status') && status !== 0 && !isExpertMode && (
            <Grid container item lg={12} spacing={3}>
              <Grid item lg={6}>
                <InputField disabled control={control} name='expertName' label='Người duyệt' />
              </Grid>
              <Grid item lg={6}>
                <InputField disabled control={control} name='viewedDate' label='Ngày duyệt' />
              </Grid>
            </Grid>
          )}
          {isExpertMode && (
            <Grid container item lg={12} spacing={3}>
              <Grid item lg={6}>
                <InputField disabled control={control} name='author' label='Người đăng' />
              </Grid>
              <Grid item lg={6}>
                <InputField disabled control={control} name='postDate' label='Ngày đăng' />
              </Grid>
            </Grid>
          )}
          <Grid container item lg={4}>
            <CustomTooltip title={state?.isDisabled ? '' : 'Thêm ảnh'} placement='right'>
              <InputLabel
                htmlFor={state?.isDisabled ? null : 'images'}
                sx={{ display: 'block', width: 'fit-content' }}
                onClick={e => {
                  if (e.target !== e.currentTarget) e.currentTarget.click();
                }}
              >
                <Button size='large' disabled={state?.isDisabled}>
                  <AddAPhotoIcon />
                </Button>
              </InputLabel>
            </CustomTooltip>
            <Controller
              control={control}
              name='images'
              render={({ field }) => (
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
                />
              )}
            />
          </Grid>
          {selectedImages.length > 0 && (
            <Grid container item lg={12} spacing={3}>
              <ImageList
                cols={3}
                gap={24}
                sx={{
                  ml: 3,
                  mt: 3,
                  width: '100%',
                }}
              >
                {renderPreviewPhotos(selectedImages)}
              </ImageList>
            </Grid>
          )}
          {!isExpertMode && getValues('status') === 1 && status !== 0 && (
            <Grid container item lg={12} spacing={3}>
              <Grid item lg>
                <InputField disabled control={control} name='rejectedReason' label='Lý do từ chối' autoSize={true} />
              </Grid>
            </Grid>
          )}
          {isExpertMode && getValues('status') !== 2 && status !== 2 && (
            <Grid container item lg={12} spacing={3}>
              <Grid item lg>
                <InputField
                  disabled={getValues('status') === 1 || status === 1}
                  control={control}
                  name='rejectedReason'
                  label='Lý do từ chối'
                  autoSize={true}
                />
              </Grid>
            </Grid>
          )}
          <Grid container item lg={12} spacing={3}>
            <Grid item lg={4}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                disabled={isExpertMode && (formState.isSubmitted || getValues('status') !== 0)}
                onClick={() => setStatus(isExpertMode ? 2 : 0)}
              >
                {isExpertMode ? 'Duyệt' : 'Lưu'}
              </Button>
            </Grid>
            {isExpertMode && (
              <Grid item lg={4}>
                <Button
                  type='submit'
                  color='error'
                  fullWidth
                  variant='contained'
                  disabled={formState.isSubmitted || getValues('status') !== 0}
                  onClick={() => setStatus(1)}
                >
                  Từ chối
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default AddUpdateAnimal;
