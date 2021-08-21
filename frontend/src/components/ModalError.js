import Modal from '@material-ui/core/Modal';
import React from 'react';

const Error = () => {
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
                <div id="error">

                </div>
            
            </Modal>
        </>
     );
}
 
export default Error;