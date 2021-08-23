import { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import TotalCosts from './TotalCosts';
import PieChart from './PieChart';
import Loader from './Loader';
import Error from '../components/ModalError';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalCosts } from '../state/actions/totalCosts';

const Charts = () => {
  const dispatch = useDispatch();
  const { totalCosts, error } = useSelector((state) => state.totalCostsReducer);

  const [showCostsDetails, setShowCostsDetails] = useState({
    einkommen: false,
    ausgaben: false,
    sparen: false,
    sonstiges: false,
  });

  useEffect(() => {
    dispatch(getTotalCosts());
  }, []);

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

          <Error open={error ? true : false} error={error} />
          {!error && showTotalCosts}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Charts;
