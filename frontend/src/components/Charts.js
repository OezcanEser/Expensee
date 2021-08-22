import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import TotalCosts from './TotalCosts';
import PieChart from './PieChart';
import Loader from './Loader';
import Error from '../components/ModalError';

import { useTotalCosts } from '../hooks/useTotalCosts';

const Charts = () => {
  const [showCostsDetails, setShowCostsDetails] = useState({
    einkommen: false,
    ausgaben: false,
    sparen: false,
    sonstiges: false,
  });
  const [totalCosts, error] = useTotalCosts();
  let totalCostsError = error;

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
              totalCosts[el].costenSummary || totalCosts[el].costenSummary >= 0
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

  return (
    <>
      <Header title='Statistik' />
      <main>
        <section className='statistic'>
          <PieChart />

          <Error
            open={totalCostsError ? true : false}
            error={totalCostsError}
          />
          {!error && showTotalCosts}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Charts;
