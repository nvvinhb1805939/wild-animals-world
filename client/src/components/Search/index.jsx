import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../form-controls/InputField';

Search.propTypes = {};

function Search(props) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      bird: '',
    },
  });

  const handleOnSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <InputField control={control} name='bird' onIconClick={handleSubmit(handleOnSubmit)} />
    </form>
  );
}

export default Search;
