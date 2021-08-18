import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import Footer from './Footer';
import Header from './Header';
import TotalCosts from './TotalCosts';

const Charts = () => {
  const setPie = {
    labels: ['Einnahmen', 'Ausgaben', 'Sparen', 'Sonstiges'],
    datasets: [
      {
        label: '# of votes',
        // data: [{ id: "Einnhamen", nested: { value: 50 } }, { id: "Ausgaben", nested: { value: 50 } }, { id: "Sparen", nested: { value: 50 } }, { id: "Sonstiges", nested: { value: 50 } }],
        data: [25, 30, 10, 23],
        backgroundColor: [
          'rgba(246, 53, 53, 1)',
          'rgba(81, 95, 235, 1)',
          'rgba(247, 199, 53, 1)',
          'rgba(149, 152, 154, 1)',
        ],
        borderWidth: 0,
      },
      {
        label: 'Total',
        data: [3450],
        backgroundColor: 'rgba(255, 255, 255, 1)',
      },
    ],
  };

  const [totalCosts, setTotalCosts] = useState(null);
  const [showCostsDetails, setShowCostsDetails] = useState({
    einkommen: false,
    ausgaben: false,
    sparen: false,
    sonstiges: false,
  });

  useEffect(() => {
    async function getTotalCosts() {
      let { data } = await axios.get('/balance/summary');
      setTotalCosts(data.data);
      console.log(totalCosts);
    }
    getTotalCosts();
  }, []);

  let showTotalCosts = totalCosts
    ? Object.keys(totalCosts).map((el) => {
        return (
          <div
            key={el}
            onClick={() => setShowCostsDetails({ [el]: !showCostsDetails[el] })}
          >
            <TotalCosts
              heading={el}
              total={totalCosts[el].costenSummary}
              costs={totalCosts[el].showCosten}
              show={showCostsDetails[el]}
            />
          </div>
        );
      })
    : null;

  return (
    <>
      <Header />
      <main>
        <section>
          <Pie
            data={setPie}
            width={550}
            height={550}
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
        </section>
      </main>
      {showTotalCosts}
      <Footer />
    </>
  );
};

export default Charts;
