import Modal from '@material-ui/core/Modal';
import React from 'react';

const ModalWallet = (props) => {
  let time = new Date().toLocaleTimeString('de', {
    hour: 'numeric',
    minute: 'numeric',
  });
  let date = new Date(props.data.created_at).toLocaleDateString('de', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.onClose}
        style={{
          position: 'absolute',
          backgroundColor: '#2B2D5B',
          height: 380,
          width: 300,
          margin: 'auto',
        }}
      >
        <div id='success'>
          <img src='../img/sucess.png' alt='sucess' />
          <h3>
            <span>Erfolgreich</span>
            <br />
            eingetragen!
          </h3>
          <span className='lineCircle'></span>
          <img src='./img/line.png' alt='line' />
          <span className='lineCircle2'></span>
          <section>
            <article>
              <p>
                <span>Datum</span>
                <br /> {date}
              </p>
              <p>
                <span>Zeit</span>
                <br />
                {time}
              </p>
            </article>
            <p className='categorie'>
              <span>Kategorie</span>
              <br />
              {props.data.category}
            </p>
            <p className='price'>
              <span>Summe</span>
              <br />
              {props.data.price}
            </p>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default ModalWallet;
