import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';
import TotalCosts from './TotalCosts';
import PieChart from './PieChart';
import Loader from './Loader';

const Charts = () => {
  const [totalCosts, setTotalCosts] = useState(null);
  const [showCostsDetails, setShowCostsDetails] = useState({
    einkommen: false,
    ausgaben: false,
    sparen: false,
    sonstiges: false,
  });
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
            total={
              totalCosts[el].costenSummary
                ? totalCosts[el].costenSummary.toFixed(2)
                : totalCosts[el].toFixed(2)
            }
            costs={totalCosts[el].showCosten}
            show={showCostsDetails[el]}
          />
        </div>
      );
    })
    : null;

  let errorExists = error && <h2>{error}</h2>;

  console.log(totalCosts);

  return (
    <>
      <Header />
      <main>
        <section>
          <PieChart />
          <Loader />
          {errorExists}
          {!error && showTotalCosts}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Charts;
