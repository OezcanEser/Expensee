import { useState, useEffect } from 'react';
import axios from 'axios';

export function useTotalCosts() {
  const [totalCosts, setTotalCosts] = useState(null);
  const [errorExists, setErrorExists] = useState(null);

  useEffect(() => {
    async function getTotalCosts() {
      try {
        let { data } = await axios.get('/balance/summary');
        setTotalCosts(data.data);
      } catch (error) {
        setErrorExists(
          error.response.data.mesage
            ? error.response.data.message
            : error.response
            ? error.response.statusText
            : error.message
        );
      }
    }
    getTotalCosts();
  }, []);

  return [totalCosts, errorExists];
}
