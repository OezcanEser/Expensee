import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import Header from "./Header";
import Footer from "./Footer";
import ModalWallet from "./ModalWallet";

const optionData = [" ", "Einnahmen", "Ausgaben", "Sonstiges"];

const Turnovers = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState("");
    const [inputs, setInputs] = useState({ category: "", description: "", price: "", created_at: "" })
    const [error, setError] =useState("")

    useEffect(() => {
        let close;
        if (open == true) {
            close = setTimeout(() => {
                setOpen(false)
                setInputs({ category: "", description: "", price: "", created_at: "" })
            }, 4000)
        }
        return () => clearTimeout(close)
    }, [open])

    const handleInputs = (event) => {
        setInputs(prev => {
            return {
                ...prev,
                category: data,
                [event.target.name]: event.target.value
            }
        })
    }

    let valueChoice = optionData.map((element) => {
        return (<option key={element} value={element}>{element}</option>);
    });

    
    const newTransfer = (event) => {
        event.preventDefault()
        axios.post(`/input`, inputs)
            .then(result => setOpen(true))
            .catch(err => err.response ? setError(err.response.data.message) : setError(error.message))
    }

    const handleClose = () => {
        setOpen(false);
    };
        
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Header title="Wallet"/>
            <main>
                <section className="wallet" >
                    <Link to="/home"><img src="../img/shape.png" alt="#" /></Link>
                    <h1>Umsätze</h1>
                    <form onSubmit={ (ev) => newTransfer(ev)}>
                        <select onChange={(event) => setData(event.target.value)} required >{valueChoice}</select> <br />
                        <input type="text" name="description" placeholder="Beschreibung" value={inputs.description} onChange={handleInputs} required /> <br />
                        <input type="number" name="price" placeholder="Geldbetrag" value={inputs.price} onChange={handleInputs} required /> <br />
                        <input type="date" name="created_at" placeholder="Datum" value={inputs.created_at} onChange={handleInputs} required /> <br />
                        <input type="submit" value="Abschicken"/>
                    </form>
                    <h1>{error}</h1>
                    <ModalWallet 
                        open= {open}
                        onClose = {handleClose}
                        data= {inputs}
                      /*   date={new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                          }).format(inputs.created_at)} */
                    />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Turnovers;