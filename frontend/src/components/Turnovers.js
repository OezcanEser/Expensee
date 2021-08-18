import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const optionData = ['Kategorie', 'Einnahmen', 'Ausgaben', 'Sonstiges'];

const Turnovers = () => {
  const [data, setData] = useState('');
  const [inputs, setInputs] = useState({
    category: '',
    description: '',
    price: '',
    created_at: '',
  });

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

  const newTransfer = () => {
    axios
      .post(`/input`, inputs)
      .then((result) => (window.location.href = result.data.redirect))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header title='Wallet' />
      <main>
        <section>
          <Link to='/home'>
            <img src='../img/shape.png' alt='#' />
          </Link>
          <h1>Umsätze</h1>
          <div id='success'>
            <img src='../img/sucess.png' alt='' />
            <h3>
              <span>Erfolgreich</span>
              <br />
              eingetragen!
            </h3>
            <p>
              <span>Datum</span>
              <br />
              {data.created_at}
            </p>
            <p>
              <span>Zeit</span>
              <br />
              {data}
            </p>
            <p>
              <span>Kategorie</span>
              <br />
              {data.category}
            </p>
            <h3>
              <span>Summe</span>
              <br />
              {data.price}
            </h3>
          </div>
          <form>
            <select onChange={(event) => setData(event.target.value)} required>
              {valueChoice}
            </select>
            <input
              type='text'
              name='description'
              placeholder='Beschreibung'
              value={inputs.description}
              onChange={handleInputs}
              required
            />
            <input
              type='number'
              name='price'
              placeholder='Geldbetrag'
              value={inputs.price}
              onChange={handleInputs}
              required
            />
            <input
              type='date'
              name='created_at'
              placeholder='Datum'
              value={inputs.created_at}
              onChange={handleInputs}
              required
            />
            <input type='submit' value='Abschicken' onClick={newTransfer} />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Turnovers;
