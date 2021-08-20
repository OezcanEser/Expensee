import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePriceData(term, showMore, idToDelete) {
  const [priceData, setPriceData] = useState();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    async function getPriceData() {
      try {
        let { data } = await axios.get(`${term}?offset=${showMore}`);
        setPriceData(data.data);
        setDisable(data.endOfLength);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
      }
    }
    getPriceData();
  }, [term, showMore, idToDelete]);

  return [priceData, error, disable];
}
