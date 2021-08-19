import { useState, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import React from 'react';

const ModalWallet = (props) => {
   console.log(props.data)
    const locale = 'de';
    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => { 
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer); 
      }
    }, []); 
  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric' });

    let date = props.data.created_at
    /* let date = () => {
        new Intl.DateTimeFormat("de", {
        year: "numeric",
        month: "long",
        day: "2-digit"
        }).format(props.data.created_at)
    }
    
    console.log(date()) */
   /*  const date = new Date(props.data.created_at) */
    console.log(date)
    console.log( Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      }).format(date.prototype.toISOString(date)))


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
            <div id="success">
                <img src="../img/sucess.png" alt="sucess" />
                <h3><span>Erfolgreich</span><br />eingetragen!</h3>
                <span className="lineCircle"></span>
                <img src="./img/line.png" alt="line"/>
                <span className="lineCircle2"></span>
                <section>
                    <article>
                        <p><span>Datum</span><br /> {props.date}</p>
                        <p><span>Zeit</span><br />{time}</p>
                    </article>
                    <p className="categorie"><span>Kategorie</span><br />{props.data.category}</p>
                    <p className="price"><span>Summe</span><br />{props.data.price}</p>
                </section>
            </div>
            </Modal>         
        </>
    );
};

export default ModalWallet;