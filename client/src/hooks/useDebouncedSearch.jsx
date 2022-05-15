import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useState } from 'react';
import { useAsync } from 'react-async-hook';
import useConstant from 'use-constant';
import animalsApi from '../api/animalsApi';

function useDebouncedSearch() {
  const [inputText, setInputText] = useState('');
  const searchFunction = inputText => animalsApi.search(inputText);

  const debouncedSearchFunction = useConstant(() => AwesomeDebouncePromise(searchFunction, 300));

  const searchResults = useAsync(async () => {
    if (!inputText.trim().toLowerCase()) {
      return [];
    } else {
      return debouncedSearchFunction(inputText.trim().toLowerCase());
    }
  }, [debouncedSearchFunction, inputText.trim().toLowerCase()]);

  return {
    inputText,
    setInputText,
    searchResults,
  };
}

export default useDebouncedSearch;
