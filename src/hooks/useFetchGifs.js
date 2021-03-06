/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs';

export default function useFetchGifs(category) {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((value) => setState({ data: value, loading: false }));
  }, [category]);

  return state;
}
