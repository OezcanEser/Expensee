import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';
import TotalCosts from './TotalCosts';
import Chart from './Chart';

const Charts = () => {
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
            style={{ marginBottom: '50px' }}
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
          <Chart />
          {showTotalCosts}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Charts;
