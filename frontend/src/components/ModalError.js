import Modal from '@material-ui/core/Modal';
import React from 'react';

const Error = (props) => {
    return ( 
        <>
            <Modal
                /* open={props.open}
                onClose={props.onClose} */
                style={{
                position: 'absolute',
                backgroundColor: '#2B2D5B',
                height: 380,
                width: 300,
                margin: 'auto',
                }}
            >
                <div id="error">
                    <img src='../img/error.png' alt='error' />
                    <h3>ERROR</h3>
                    <span className='lineCircle'></span>
                    <img src='./img/line.png' alt='line' />
                    <span className='lineCircle2'></span>
                    <h1>{props.error}</h1>
                </div>
            
            </Modal>
        </>
     );
}
 
export default Error;