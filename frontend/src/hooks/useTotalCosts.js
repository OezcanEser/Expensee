import { useState, useEffect } from 'react';
import axios from 'axios';

export function useTotalCosts() {
  const [totalCosts, setTotalCosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTotalCosts() {
      try {
        let { data } = await axios.get('/balance/summary');
        setTotalCosts(data.data);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
      }
    }
    getTotalCosts();
  }, []);

  return [totalCosts, error];
}
