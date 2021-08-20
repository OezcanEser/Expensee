import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';

const PieChart = () => {
  const [totalCosts, setTotalCosts] = useState(null);

  useEffect(() => {
    async function getTotalCosts() {
      let { data } = await axios.get('/balance/summary');
      setTotalCosts(data.data);
      console.log(totalCosts);
    }
    getTotalCosts();
  }, []);

  function pieces() {
    if (totalCosts) {
      return Object.keys(totalCosts).map((element) => {
        return totalCosts[element].costenSummary
          ? Math.abs(totalCosts[element].costenSummary)
          : Math.abs(totalCosts[element]);
      });
    }
  }

  console.log('hello from chart');
  // {totalCosts && totalCosts.sparen}
  return (
    <div className='chart'>
      <div className='chartText'>
        <p>{totalCosts && totalCosts.sparen.toFixed(2)}€</p>
      </div>
      <Pie
        data={{
          labels: ['Einnahmen', 'Ausgaben', 'Sparen', 'Sonstiges'],
          datasets: [
            {
              label: '# of votes',
              data: pieces(),
              backgroundColor: [
                'rgba(246, 53, 53, 1)',
                'rgba(81, 95, 235, 1)',
                'rgba(247, 199, 53, 1)',
                'rgba(149, 152, 154, 1)',
              ],
              borderWidth: 0,
            },
            {
              data: [1],
              backgroundColor: ['white'],
              borderWidth: 0,
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              position: 'bottom',
              labels: {
                color: '#ffffff',
                usePointStyle: true,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default React.memo(PieChart);
