import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import SearchField from '../form-controls/SearchField';

Search.propTypes = {};

function Search(props) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      animals: '',
    },
  });

  const handleOnSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <SearchField control={control} name='animals' />
    </form>
  );
}

export default Search;
