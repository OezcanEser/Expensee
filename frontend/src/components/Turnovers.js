import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Modal from '@material-ui/core/Modal';
import React from 'react';

const optionData = ['Kategorie', 'Einnahmen', 'Ausgaben', 'Sonstiges'];

const Turnovers = () => {
  const [data, setData] = useState('');
  const [inputs, setInputs] = useState({
    category: '',
    description: '',
    price: '',
    created_at: '',
  });
  const [error, setError] = useState('');
  const [open, setOpen] = React.useState(false);

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

  const newTransfer = (event) => {
    event.preventDefault();
    axios
      .post(`/input`, inputs)
      .then((result) => console.log(result))
      .catch((err) =>
        err.response
          ? setError(err.response.data.message)
          : setError(error.message)
      );
  };

  //Modal

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Header title="Wallet" />
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
              placeholder='Beschreibung'
              value={inputs.description}
              onChange={handleInputs}
              required
            />{' '}
            <br />
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
            <input type='submit' value='Abschicken' onClick={handleOpen} />
          </form>
          <h1>{error}</h1>
          <Modal
            onClose={handleClose}
            open={open}
            style={{
              position: 'absolute',
              backgroundColor: '#2B2D5B',
              height: 350,
              width: 300,
              margin: 'auto',
            }}
          >
            <div id='success'>
              <img src='../img/sucess.png' alt='' />
              <h3>
                <span>Erfolgreich</span>
                <br />
                eingetragen!
              </h3>
              <img src='./img/line.png' />
              <section>
                <article>
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
                </article>
                <p>
                  <span>Kategorie</span>
                  <br />
                  {data.category}
                </p>
                <p>
                  <span>Summe</span>
                  <br />
                  {data.price}
                </p>
              </section>
            </div>
          </Modal>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Turnovers;