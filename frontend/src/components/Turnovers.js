import { useState } from "react";

const Turnovers = () => {
    const [options, setOptions] = useState({
        Kategorie: "Kategorie",
        Einkommen: "Einkommen",
        Lebensmittel: "Lebensmittel",
        Shopping: "Shopping",
        Wohnung: "Wohnung",
        Restaurant: "Restaurant"
    })
    const [data, setData] = useState("")
    console.log(data)
    return (
        <>
            <h1>Umsätze</h1>
            <form>
                <select onChange={event => setData(event.target.value)}>
                    <option value="kategorie">Kategorie</option>
                    <option value="einkommen">Einkommen</option>
                    <option value="lebensmittel">Lebensmittel</option>
                    <option value="shopping">Shopping</option>
                    <option value="wohnung">Wohnung</option>
                    <option value="restaurant">Restaurant</option>
                </select>
                <input type="text" value="" placeholder="Beschreibung" />
                <input type="number" value="" placeholder="Geldbetrag" />
                <input type="date" name="" id="" placeholder="Datum" />
                <input type="submit" value="Abschicken" />
            </form>
        </>);
}

export default Turnovers;