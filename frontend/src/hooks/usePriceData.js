import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePriceData(term, showMore, idToDelete) {
  const [priceData, setPriceData] = useState();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getPriceData() {
      try {
        let { data } = await axios.get(`${term}?offset=${showMore}`);
        setPriceData(data.data);
        setDisable(data.endOfLength);
        setUser(data.user);
        console.log('data from backend: ', data);
      } catch (error) {
        setError(
          error.response.data.mesage
            ? error.response.data.message
            : error.response
            ? error.response.statusText
            : error.message
        );
      }
    }
    getPriceData();
  }, [term, showMore, idToDelete]);

  return [priceData, error, disable, user];
}
