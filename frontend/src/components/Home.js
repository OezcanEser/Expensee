import { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';

import { usePriceData } from '../hooks/usePriceData';

const Home = () => {
  const [showMore, setShowMore] = useState(0);
  const [term, setTerm] = useState('/balance');
  const [idToDelete, setIdToDelete] = useState(null);
  const [priceData, error, disable, user] = usePriceData(
    term,
    showMore,
    idToDelete
  );
  const [deleteError, setDeleteError] = useState(null);

  const handleMore = () => {
    setShowMore((prev) => prev + 7);
  };

  const deleteTransfer = async (id) => {
    try {
      await axios.delete(`/input/${id}`);
      setIdToDelete(id);
    } catch (error) {
      console.log(error);
      setDeleteError(
        error.response ? error.response.data.message : error.message
      );
    }
  };

  let showPrices = priceData ? (
    priceData.map((transfer) => (
      <li key={transfer.id}>
        <div
          style={{
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            backgroundColor:
              transfer.category === 'Einnahmen' ? '#00FF00' : '#F63535',
          }}
        ></div>
        <article>
          <h4>{transfer.description}</h4>
          <p>
            {new Date(transfer.created_at).toLocaleDateString('de', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </p>
        </article>
        <p className='price'>{transfer.price.toFixed(2)}</p>
        <img
          src='./img/delete.png'
          alt='delete'
          style={{ height: '25px' }}
          onClick={() => deleteTransfer(transfer.id)}
        />
      </li>
    ))
  ) : (
    <Loader />
  );

  console.log('current user: ', user);

  return (
    <>
      <Header title='Übersicht' />
      <main>
        <section className='overview'>
          <div className='overviewHead'>
            <h3>Letzte Transaktionen</h3>
            <button onClick={() => setTerm('/balance/all')}>Show full</button>
          </div>
          <ul>{showPrices}</ul>
          <div className='buttonM'>
            <button
              className='buttonMore'
              onClick={handleMore}
              disabled={disable}
            >
              MEHR TRANSAKTIONEN
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
