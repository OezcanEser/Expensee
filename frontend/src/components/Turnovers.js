import { useState } from "react";
import axios from "axios"
import Header from "./Header";
import Footer from "./Footer";

const optionData = ["Kategorie", "Einkommen", "Lebensmittel", "Shopping", "Wohnung", "Restaurant"];

const Turnovers = () => {
    const [data, setData] = useState("");
    const [inputs, setInputs] = useState({ description: "", money: "", date: "" })
    console.log(data, inputs)

    const handleInputs = (event) => {
        setInputs(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    let valueChoice = optionData.map((element) => {
        return (<option key={element} value={element}>{element}</option>);
    });

    const newTransfer = () => {
        axios.post(`/api`, inputs)
            .then(result => window.location.href = result.data.redirect)
            .catch(err => console.log(err))
    }

    return (
        <section>
            <Header/>
            <h1>Umsätze</h1>
            <form>
                <select onChange={(event) => setData(event.target.value)}>{valueChoice}</select>
                <input type="text" name="description" placeholder="Beschreibung" value={inputs.description} onChange={handleInputs} />
                <input type="number" name="money" placeholder="Geldbetrag" value={inputs.money} onChange={handleInputs} />
                <input type="date" name="date" placeholder="Datum" value={inputs.date} onChange={handleInputs} />
                <input type="submit" value="Abschicken" onClick={newTransfer} />
            </form>
            <Footer/>
        </section>
    );
};

export default Turnovers;
