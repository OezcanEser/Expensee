import { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Error from '../components/ModalError';

import { usePriceData } from '../hooks/usePriceData';
import { errorResponseMessage } from '../utils/errorResponseMessage';
import Price from '../components/Price';

const Home = () => {
  const [showMore, setShowMore] = useState(0);
  const [term, setTerm] = useState('/balance');
  const [idToDelete, setIdToDelete] = useState(null);
  const [priceData, error, disable, user] = usePriceData(
    term,
    showMore,
    idToDelete
  );
  const [deleteInputError, setDeleteInputError] = useState(null);

  const handleMore = () => {
    setShowMore((prev) => prev + 7);
  };

  const deleteTransfer = async (id) => {
    try {
      await axios.delete(`/input/${id}`);
      setIdToDelete(id);
    } catch (error) {
      console.log(error);
      setDeleteInputError(errorResponseMessage(error));
    }
  };

  const handleClose = () => {
    setDeleteInputError(null);
  };

  let showPrices = priceData ? (
    priceData.map((transfer) => (
      <Price
        key={transfer.id}
        backgroundColor={
          transfer.category === 'Einnahmen' ? '#00FF00' : '#F63535'
        }
        onClick={() => deleteTransfer(transfer.id)}
        {...transfer}
      />
    ))
  ) : (
    <Loader />
  );

  return (
    <>
      <Header title='Übersicht' />
      <main>
        <section className='overview'>
          <h2>Hallo {user && user.username} !</h2>
          <div className='overviewHead'>
            <h3>Letzte Transaktionen</h3>

            <button onClick={() => setTerm('/balance/all')}>Show full</button>
          </div>
          <ul>{showPrices}</ul>
          <div className='buttonM'>
            {term !== '/balance/all' && (
              <button
                className='buttonMore'
                onClick={handleMore}
                disabled={disable}
                hidden={disable && disable}
              >
                MEHR TRANSAKTIONEN
              </button>
            )}
          </div>
        </section>
        {deleteInputError ? (
          <Error
            open={deleteInputError ? true : false}
            error={deleteInputError}
            onClose={handleClose}
          />
        ) : error ? (
          <Error
            open={error ? true : false}
            error={error}
            onClose={handleClose}
          />
        ) : null}
      </main>
      <Footer />
    </>
  );
};

export default Home;
