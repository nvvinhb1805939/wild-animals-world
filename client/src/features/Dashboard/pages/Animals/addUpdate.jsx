import { Box } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addAnimal, fetchAnimalById } from '../../../Animals/animalsSlice';
import Form from '../../components/Form';
import Heading from '../../components/Heading';

function AddUpdateAnimal(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const updatedAnimalID = parseInt(params.animal_ID?.split('-').pop());
  const updatedAnimal = useSelector(
    state => state.animals.animals.find(animal => animal.animal_ID === updatedAnimalID) || state.animals.animals
  );
  const user = JSON.parse(localStorage.getItem('token'));
  const isAddMode = !updatedAnimalID;
  const defaultValues = isAddMode
    ? {
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
      }
    : updatedAnimal;

  const handleOnSubmit = async data => {
    // await dispatch(addAnimal(data));
  };
  console.log(updatedAnimalID, isAddMode, updatedAnimal, defaultValues);

  useEffect(() => {
    if (isAddMode) return;
    const fetchAnimal = async animal_ID => {
      await dispatch(fetchAnimalById(animal_ID));
    };
    fetchAnimal(updatedAnimalID);
  }, [updatedAnimal.length]);

  return (
    <Box>
      <Heading text={params.animal_ID ? 'Cập nhật thông tin động vật' : 'Thêm động vật'} />
      <Form onSubmit={handleOnSubmit} defaultValues={defaultValues} isAddMode={isAddMode} />
    </Box>
  );
}

export default AddUpdateAnimal;
