import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModalWallet from '../components/ModalWallet';
import Error from '../components/ModalError';
import { errorResponseMessage } from '../utils/errorResponseMessage';

const optionData = [' ', 'Einnahmen', 'Ausgaben', 'Sonstiges'];
const descriptionData = [
  'Gehalt',
  'Lebensmittel',
  'Shopping',
  'Wohnung',
  'Restaurant',
  'Versicherung',
];

const Turnovers = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState('');
  const [inputs, setInputs] = useState({
    category: '',
    description: '',
    price: '',
    created_at: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    let close;
    if (open) {
      close = setTimeout(() => {
        setOpen(false);
        setInputs({ category: '', description: '', price: '', created_at: '' });
      }, 4000);
    }
    return () => clearTimeout(close);
  }, [open]);

  useEffect(() => {
    let close;
    if (error) {
      close = setTimeout(() => {
        setError(null);
      }, 3000);
    }
    return () => clearTimeout(close);
  }, [error]);

  const handleInputs = (event) => {
    setInputs((prev) => {
      return {
        ...prev,
        category: data,
        [event.target.name]: event.target.value,
      };
    });
  };

  let valueChoice = optionData.map((element) => {
    return (
      <option key={element} value={element}>
        {element}
      </option>
    );
  });

  let valueDescription = descriptionData.map((element) => {
    return (
      <option key={element} value={element}>
        {element}
      </option>
    );
  });

  const newTransfer = async (event) => {
    event.preventDefault();
    try {
      let { data } = await axios.post('/input', inputs);
      if (data.success) {
        setOpen(true);
      }
    } catch (error) {
      setError(errorResponseMessage(error));
    }
  };

  const handleClose = () => {
    setOpen(false);
    setError(null);
  };

  return (
    <>
      <Header title='Wallet' />
      <main>
        <section className='wallet'>
          <Link to='/home'>
            <img src='../img/shape.png' alt='#' />
          </Link>
          <h1>Umsätze</h1>
          <form onSubmit={(ev) => newTransfer(ev)}>
            <select onChange={(event) => setData(event.target.value)} required>
              {valueChoice}
            </select>{' '}
            <br />
            <input
              type='text'
              name='description'
              list='Beschreibung'
              placeholder='Beschreibung'
              value={inputs.description}
              onChange={handleInputs}
              required
            />
            <datalist
              id='Beschreibung'
              onChange={(event) => setData(event.target.value)}
              required
            >
              {valueDescription}
            </datalist>
            <input
              type='number'
              name='price'
              placeholder='Geldbetrag'
              value={inputs.price}
              onChange={handleInputs}
              required
            />{' '}
            <br />
            <input
              type='date'
              name='created_at'
              placeholder='Datum'
              value={inputs.created_at}
              onChange={handleInputs}
              required
            />{' '}
            <br />
            <input type='submit' value='Abschicken' />
          </form>
          <Error
            open={error ? true : false}
            error={error}
            onClose={handleClose}
          />
          <ModalWallet open={open} onClose={handleClose} data={inputs} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Turnovers;
