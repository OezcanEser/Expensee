import { useState, useEffect } from 'react';
import axios from 'axios';

import { errorResponseMessage } from '../utils/errorResponseMessage';

export function useTotalCosts() {
  const [totalCosts, setTotalCosts] = useState(null);
  const [errorExists, setErrorExists] = useState(null);

  useEffect(() => {
    async function getTotalCosts() {
      try {
        let { data } = await axios.get('/balance/summary');
        setTotalCosts(data.data);
      } catch (error) {
        setErrorExists(errorResponseMessage(error));
      }
    }
    getTotalCosts();
  }, []);

  return [totalCosts, errorExists];
}
