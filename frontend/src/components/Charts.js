import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import TotalCosts from './TotalCosts';
import PieChart from './PieChart';
import Loader from './Loader';

import { useTotalCosts } from '../hooks/useTotalCosts';

const Charts = () => {
  // const [totalCosts, setTotalCosts] = useState(null);
  const [showCostsDetails, setShowCostsDetails] = useState({
    einkommen: false,
    ausgaben: false,
    sparen: false,
    sonstiges: false,
  });
  const [totalCosts, error] = useTotalCosts();
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function getTotalCosts() {
  //     try {
  //       let { data } = await axios.get('/balance/summary');
  //       setTotalCosts(data.data);
  //     } catch (error) {
  //       setError(error.response ? error.response.data.message : error.message);
  //     }
  //   }
  //   getTotalCosts();
  // }, []);

  let showTotalCosts = totalCosts ? (
    Object.keys(totalCosts).map((el, index) => {
      return (
        <div
          key={el}
          onClick={() => setShowCostsDetails({ [el]: !showCostsDetails[el] })}
          className={`totalCoast-${index + 1}`}
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
  ) : (
    <Loader />
  );

  let errorExists = error && <h2>{error}</h2>;

  console.log(totalCosts);

  return (
    <>
      <Header title='Statistik' />
      <main>
        <section className='statistic'>
          <PieChart />
          {/*  <Loader /> */}
          {errorExists}
          {!error && showTotalCosts}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Charts;
