import { useState } from "react";

const Turnovers = () => {
    const [options, setOptions] = useState({
        kategorie: "kategorie",
        einkommen: "einkommen",
        lebensmittel: "lebensmittel",
        shopping: "shopping",
        wohnung: "wohnung",
        restaurant: "restaurant"
    })
    const [data, setData] = useState("")
    console.log(options, setOptions, data)
    return (
        <section>
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
        </section>);
}

export default Turnovers;